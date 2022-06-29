import React from "react";
import "./profile.css";

const ProfileForm = () => {
	return (
		<div className="profile_form_container">
			<form className="profile_register_form">
				<label className="profile_label text_small" htmlFor="nama">
					Nama
				</label>
				<div>
					<input type="text" name="nama" id="nama" required placeholder="Nama Lengkap" className="profile_input_box"></input>
				</div>
				<label className="profile_label text_small" htmlFor="nama">
					Kota
				</label>
				<div>
					<input type="Email" name="Email" id="Email" required placeholder=" Pilih kota" className="profile_input_box"></input>
				</div>
				<label className="profile_label" text_small htmlFor="nama">
					Alamat
				</label>
				<div>
					<input type="text" name="alamat" id="alamat" required placeholder=" contoh alamat" className="profile_input_box"></input>
				</div>
				<label className="profile_label text_small" htmlFor="handpone">
					No Handpone
				</label>
				<div>
					<input type="number" name="Handpone" id="Handpone" required placeholder=" contoh: +628123456789" className="profile_input_box"></input>
				</div>
			</form>
			<button type="submit" className="btn_profile_submit mt-5">
				Simpan
			</button>
		</div>
	);
};

export default ProfileForm;
