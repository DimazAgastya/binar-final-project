import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productSlice from "../../store/productSlice";
const ProdukForm = () => {
	const { register, handleSubmit, formState } = useForm();

	// jika gagal login maka akan muncul pesan (pakai saat api nya udah kelar):
	const [produkStatus, setProdukStatus] = useState({
		success: false,
		message: "",

		/*

	*/
	});

	// dispatch axios
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [files, setFiles] = useState();

	/*  const product = useSelector((state) => state.product.data);
	console.log(product); */

	//menampilkan data nama,email,password

	const formSubmithandler = (data) => {
		console.log(data);

		const postData = {
			name: data.produk_name,
			price: data.produk_price,
			description: data.produk_desc,
			categories: data.produk_categories,
		};

		axios
			.post("https://finalsecondhand-staging.herokuapp.com/auth/sign-up", postData) // kalau dah ready taruh link heroku disini
			.then((res) => {
				console.log(res);
				navigate("/");
			})

			// failed  notification
			.catch((err) => {
				//	console.log(err.response);
				setProdukStatus({
					success: false,
					message: "Failed to make Account, Please try again later",
				});
			});
	};

	return (
		<div className="col-12 col-lg-4 produk_form_container">
			<form className="infoProdukForm_container">
				<label className="infoProduk_label" htmlFor="nama">
					Nama Produk
				</label>
				<div>
					<input type="text" name="produk" id="produk" required placeholder=" Nama Produk" className="infoProduk_box"></input>
				</div>
				<label className="infoProduk_label" htmlFor="nama">
					Harga Produk
				</label>
				<div>
					<input type="text" name="Produk" id="Produk" required placeholder="Harga Produk" className="infoProduk_box"></input>
				</div>
				<label className="infoProduk_label" htmlFor="nama">
					Kategori
				</label>
				<div>
					<input type="text" name=" PilihanProduk" id="PilihanProduk" required placeholder="Pilihan Produk" className="infoProduk_box"></input>
				</div>
				<label className="infoProduk_label" htmlFor="nama">
					Deskrpisi
				</label>
				<div>
					<input type="text" name=" Jalan" id="Jalan" required placeholder="Contoh Jalan" className="infoProduk_box infoProduk_lastForm"></input>
				</div>
			</form>
		</div>
	);
};

export default ProdukForm;
