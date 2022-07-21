import React, { useState } from "react";
import "./register.css";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../../store/UserSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";

const RegisterForm = () => {
	const { register, handleSubmit, formState } = useForm();

	// jika gagal login maka akan muncul pesan (pakai saat api nya udah kelar):
	const [regisStatus, setRegisStatus] = useState({
		success: false,
		message: "",

		/*
			{!regisStatus.sucess && regisStatus.message && <p className="text-danger  m-0 ">{regisStatus.message}</p>}

	*/
	});

	// dispatch axios
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//menampilkan data nama,email,password

	const formSubmithandler = (data) => {
		console.log(data);

		const postData = {
			name: data.user_name,
			email: data.user_email,
			password: data.user_password,
		};

		axios
			.post("https://finalsecondhand-staging.herokuapp.com/auth/sign-up", postData) // kalau dah ready taruh link heroku disini
			.then((res) => {
				console.log(res);
				/* memastikan bahwa token nya ada
				if (typeof res.data.acessToken !== "undefined") {
					localStorage.setItem("secondHandToken", res.data.acessToken);
				} */

				// menyimpan di redux store

				const user = jwtDecode(res.data.acessToken);
				axios.get(`https://finalsecondhand-staging.herokuapp.com/User/DetailUser${user.sub}`).then((res) => {
					dispatch(
						userSlice.actions.addUser({
							userData: res.data,
						})
					);
					// jika sudah login maka diarahkan ke :
					navigate("/");
				});
			})

			// failed register notification
			.catch((err) => {
				//	console.log(err.response);
				setRegisStatus({
					success: false,
					message: "Failed to make Account, please try again later",
				});
			});
	};

	return (
		<div className="register_form_container register_right col-12 col-lg-4 m">
			<h2 className="">Daftar</h2>
			<form className="register_form" onSubmit={handleSubmit(formSubmithandler)}>
				<div>
					<label className="register_label name" htmlFor="user_name">
						Name
					</label>
					<div>
						<input type="text" name="user_name" id="user_name" required placeholder="Nama Lengkap" className="input_box" {...register("user_name")}></input>
						<p>{formState.errors.user_name?.type === "required"}</p>
					</div>
				</div>
				<div>
					<label className="register_label email" htmlFor="email">
						Email
					</label>
					<div>
						<input type="email" name="user_email" id="user_email" required placeholder=" Contoh: johndee@gmail.com" className="input_box" {...register("user_email")}></input>
					</div>
					<p>{formState.errors.user_email?.type === "required"}</p>
				</div>
				<div>
					<label className="register_label" htmlFor="user_password">
						Password
					</label>
					<div>
						<input type="password" name="user_password" id="user_password" required="password" placeholder="Masukkan password" className="input_box" {...register("user_password")}></input>
						<FiEye className="register_icon" />
						<p>{formState.errors.user_password?.type === "required"}</p>
					</div>
				</div>
				<button type="submit" className="btn_register mt-5">
					Daftar
				</button>
			</form>
			<div className="footer">
				<p>
					Sudah punya akun?
					<Link to="/login" className="daftar">
						Masuk sini
					</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterForm;

/*

<div className="register_form_container register_right col-12 col-lg-4 m">
			<h2 className="">Daftar</h2>
			<form className="register_form" onSubmit={handleSubmit(formSubmitHandler)}>
				<div>
					<label className="register_label name" htmlFor="user_name">
						Name
					</label>
					<div>
						<input type="text" name="user_name" id="user_name" required placeholder="Nama Lengkap" className="input_box" {...register("user_name")}></input>
						<p>{formState.errors.user_name?.type === "required"}</p>
					</div>
				</div>
		
				<div>
					<label className="register_label email" htmlFor="email">
						Email
					</label>
					<div>
						<input type="email" name="user_email" id="user_email" required placeholder=" Contoh: johndee@gmail.com" className="input_box" {...register("user_email")}></input>
					</div>
					<p>{formState.errors.user_email?.type === "required"}</p>
				</div>
		
				<div>
					<label className="register_label" htmlFor="user_password">
						Password
					</label>
					<div>
						<input type="password" name="user_password" id="user_password" required="password" placeholder="Masukkan password" className="input_box" {...register("user_password")}></input>
						<FiEye className="register_icon" />
						<p>{formState.errors.user_password?.type === "required"}</p>
					</div>
				</div>
				<Link to="#">
					<button type="submit" className="btn_register mt-5">
						Daftar
					</button>
				</Link>
			</form>

			<div className="footer">
				<p>
					Sudah punya akun?
					<Link to="/" className="daftar">
						Masuk sini
					</Link>
				</p>
			</div>
		</div>




				<form onSubmit={handleSubmit(formSubmithandler)}>
			<div>
				<div className="email">
					<label htmlFor="email">Email</label>
				</div>
				<input type="email" placeholder="Contoh: johndee@gmail.com" name="email" id="email" required {...register("user_email")} />
				<p>{formState.errors.user_email?.type === "required"}</p>
			</div>
			<div>
				<label htmlFor="user_password">Password</label>
				<input type="password" placeholder="6+ karakter" name="user_password" id="user_password" required="password" {...register("user_password")} />
				<p>{formState.errors.user_password?.type === "required"} </p>
			</div>

			<div className="mb-4">
				<button id="btn-save-modal" type="submit">
					Register Account
				</button>
			</div>
			<Link to="/login">already have an account</Link>
		</form>

*/
