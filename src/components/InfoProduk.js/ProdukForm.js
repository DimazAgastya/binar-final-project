import React from "react";
import "./info.css";

const ProdukForm = () => {
	return (
		<div className="register_right col-12 col-lg-4 produk_form_container">
			<form className="register_form">
				<label className="login_label" htmlFor="nama">
					Nama Produk
				</label>
				<div>
					<input type="text" name="produk" id="produk" required placeholder=" Nama Produk" className="input_box"></input>
				</div>
				<label className="login_label" htmlFor="nama">
					Harga Produk
				</label>
				<div>
					<input type="text" name="Produk" id="Produk" required placeholder="Harga Produk" className="input_box"></input>
				</div>
				<label className="login_label" htmlFor="nama">
					Kategori
				</label>
				<div>
					<input type="text" name=" PilihanProduk" id="PilihanProduk" required placeholder="Pilihan Produk" className="input_box"></input>
				</div>
				<label className="login_label" htmlFor="nama">
					Deskrpisi
				</label>
				<div>
					<input type="text" name=" Jalan" id="Jalan" required placeholder="Contoh Jalan" className="input_box"></input>
				</div>
			</form>
		</div>
	);
};

export default ProdukForm;
