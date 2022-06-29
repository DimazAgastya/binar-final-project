import React from "react";
import "./register.css";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
	const { register, handleSubmit, formState } = useForm();

	const formSubmitHandler = (data) => {
		console.log(data);
	};

	return (
		<div className="register_form_container register_right col-12 col-lg-4 m">
			<h2 className="">Daftar</h2>
			<form className="register_form" onSubmit={handleSubmit(formSubmitHandler)}>
				{/* name section */}
				<div>
					<label className="register_label" htmlFor="name">
						Name
					</label>
					<div>
						<input type="text" name="name" id="name" required placeholder="Nama Lengkap" className="input_box" {...register("user_name")}></input>
						<p>{formState.errors.user_name?.type === "required"}</p>
					</div>
				</div>
				{/* email section */}
				<div>
					<label className="register_label" htmlFor="email">
						Email
					</label>
					<div>
						<input type="email" name="email" id="email" required placeholder=" Contoh: johndee@gmail.com" className="input_box" {...register("user_email")}></input>
					</div>
					<p>{formState.errors.user_email?.type === "required"}</p>
				</div>
				{/* password section */}
				<div>
					<label className="register_label" htmlFor="password">
						Password
					</label>
					<div>
						<input type="password" name="password" id="password" required placeholder="Masukkan password" className="input_box" {...register("user_password")}></input>
						<FiEye className="register_icon" />
						<p>{formState.errors.user_password?.type === "required"}</p>
					</div>
				</div>
			</form>
			<button type="submit" className="btn_register mt-5">
				Daftar
			</button>
			<div className="footer">
				<p>
					Sudah punya akun?
					<Link to="/" className="daftar">
						Masuk sini
					</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterForm;

/*


import axios from "axios";
import { useDispatch } from "react-redux";




	// jika gagal maka akan muncul :

	const [regStatus, setRegStatus] = useState({
		success: false,
		message: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// menampilkan isi data email serta Pass

	const formSubmitHandler = (data) => {
		console.log(data);

		// setup pengiriman data via axios ( hasil akan berupa token)
		const postData = {
			name: data.user_name,
			email: data.user_email,
			password: data.user_password,
		};

		// halaman domain server taruh disini || axios.post("#", postData);
	};

	//  setup pengiriman data via axios ( hasilnya berupa ascess token)
*/
