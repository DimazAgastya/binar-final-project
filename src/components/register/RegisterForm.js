import React from "react";
import "./register.css";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const RegisterForm = () => {
	return (
		<div className="register_right col-12 col-lg-4 m">
			<h2>Daftar</h2>
			<form className="register_form">
				<label className="register_label" htmlFor="nama">
					Nama
				</label>
				<div>
					<input type="text" name="nama" id="nama" required placeholder="Nama Lengkap" className="input_box"></input>
				</div>
				<label className="register_label" htmlFor="nama">
					Email
				</label>
				<div>
					<input type="Email" name="Email" id="Email" required placeholder=" Contoh: johndee@gmail.com" className="input_box"></input>
				</div>
				<label className="register_label" htmlFor="nama">
					Password
				</label>
				<div>
					<input type="Password" name="Password" id="Password" required placeholder="Masukkan password" className="input_box"></input>
					<FiEye className="register_icon" />
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
	<div className="register_right col-12 col-lg-4 m">
			<h2>Daftar</h2>
			<form className="register_form">
				<label className="register_label" htmlFor="nama">
					Nama
				</label>
				<div>
					<input type="text" name="nama" id="nama" required placeholder="Nama Lengkap" className="input_box"></input>
				</div>
				<label className="register_label" htmlFor="nama">
					Email
				</label>
				<div>
					<input type="Email" name="Email" id="Email" required placeholder=" Contoh: johndee@gmail.com" className="input_box"></input>
				</div>
				<label className="register_label" htmlFor="nama">
					Password
				</label>
				<div>
					<input type="Password" name="Password" id="Password" required placeholder="Masukkan password" className="input_box"></input>
					<FiEye className="register_icon" />
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
*/
