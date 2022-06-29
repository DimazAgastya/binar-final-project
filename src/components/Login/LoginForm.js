import React from "react";
import { FiEye } from "react-icons/fi";
import "./login.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
	return (
		<div className="login_right col-12 col-lg-4">
			<h2>Masuk</h2>
			<form className="login_form">
				<label className="login_label" htmlFor="nama">
					Email
				</label>
				<div>
					<input type="Email" name="Email" id="Email" required placeholder=" Contoh: johndee@gmail.com" className="input_box"></input>
				</div>
				<label className="login_label" htmlFor="nama">
					Password
				</label>
				<div>
					<input type="Password" name="Password" id="Password" required placeholder="Masukkan password" className="input_box"></input>
					<FiEye className="login_icon" />
				</div>
			</form>
			<button type="submit" className="login_submit mt-5">
				Masuk
			</button>
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
