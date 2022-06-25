import React from "react";
import "./profile.css";

const ProfileForm = () => {
	return (
		<div className="register_right">
			<form className="register_form">
				<label className="label" htmlFor="nama">
					Nama
				</label>
				<div>
					<input type="text" name="nama" id="nama" required placeholder="Nama Lengkap" className="input_box"></input>
				</div>
				<label className="" htmlFor="nama">
					Email
				</label>
				<div>
					<input type="Email" name="Email" id="Email" required placeholder=" Contoh: johndee@gmail.com" className="input_box"></input>
				</div>
				<label className="" htmlFor="nama">
					Alamat
				</label>
				<div>
					<input type="text" name="alamat" id="alamat" required placeholder=" contoh alamat" className="input_box"></input>
				</div>
				<label className="" htmlFor="nama">
					No Handpone
				</label>
				<div>
					<input type="number" name="Handpone" id="Handpone" required placeholder=" contoh: +628123456789" className="input_box"></input>
				</div>
			</form>
			<button type="submit" className="btn_login mt-5">
				Daftar
			</button>
			<div className="footer">
				<p>
					Sudah punya akun?
					<a href="/register" className="daftar">
						Masuk sini
					</a>
				</p>
			</div>
		</div>
	);
};

export default ProfileForm;
