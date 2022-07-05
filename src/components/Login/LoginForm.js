import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../store/userSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";

const LoginForm = () => {
	const { register, handleSubmit, formState } = useForm();

	// jika gagal login maka akan muncul pesan :
	const [loginStatus, setLoginStatus] = useState({
		success: false,
		message: "",

		/*
			{!loginStatus.sucess && loginStatus.message && <p className="text-danger  m-0 ">{loginStatus.message}</p>}

	*/
	});

	// dispatch axios
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//menampilkan data  email dan password

	const formSubmithandler = (data) => {
		console.log(data);

		//  setup pengiriman data via axios ( hasilnya berupa ascess token)

		const postData = {
			email: data.user_email,
			password: data.user_password,
		};

		axios
			.post("http://", postData) // kalau dah ready taruh link heroku disini
			.then((res) => {
				// memastikan bahwa token nya ada
				if (typeof res.data.acessToken !== "undefined") {
					localStorage.setItem("secondHandToken", res.data.acessToken);
				}

				// menyimpan di redux store

				const user = jwtDecode(res.data.acessToken);
				axios.get(`http://${user.sub}`).then((res) => {
					dispatch(
						userSlice.actions.addUser({
							userData: res.data,
						})
					);
					// jika sudah login maka diarahkan ke :
					navigate("/daftarjual");

					// (role: seller atau bukan?) baru nanti di navigate di branch-all diarahkan ke page masing2
					if (res.data.isSeller) {
						navigate("/profile");
					} else navigate("/daftarjual");
				});
			})

			// failed register notification
			.catch((err) => {
				//	console.log(err.response);
				setLoginStatus({
					success: false,
					message: "Sorry incorrect Password,or maybe your account is not register yet.",
				});
			});
	};
	return (
		<div className="login_right col-12 col-lg-4">
			<h2>Masuk</h2>
			<form className="login_form" onSubmit={handleSubmit(formSubmithandler)}>
				<label className="login_label" htmlFor="user_email">
					Email
				</label>
				<div>
					<input type="email" name="user_email" id="user_email" required placeholder=" Contoh: johndee@gmail.com" className="input_box" {...register("user_email")}></input>
					<p>{formState.errors.user_email?.type === "required"}</p>
				</div>
				<label className="login_label" htmlFor="user_password">
					Password
				</label>
				<div>
					<input type="password" name="user_password" id="user_password" required="password" placeholder="Masukkan password" className="input_box" {...register("user_password")}></input>
					<FiEye className="login_icon" />
					<p>{formState.errors.user_name?.type === "required"}</p>
				</div>
				<button type="submit" className="login_submit mt-5">
					Masuk
				</button>
			</form>
			<div className="footer">
				<p>
					belum punya akun?
					<Link to="/register" className="daftar">
						Daftar sini
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;

/*

		<FiEye className="login_icon" />

*/
