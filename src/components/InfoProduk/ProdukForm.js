import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productSlice from "../../Store/productSlice";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import Select from "react-select";

const ProdukForm = () => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState([]);
	const [files, setFiles] = useState([]);
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product.data);

	const inputName = useRef();
	const inputPrice = useRef();
	const inputCategories = useRef();
	const inputDescription = useRef();

	console.log(product);

	// possible err
	// const product = useSelector((state) => state.product.data);

	useEffect(() => {
		if (product) {
			inputName.current.value = product.name;
			inputPrice.current.value = product.price;
			inputDescription.current.value = product.description;
			setCategories(product.categories);
			setFiles(() =>
				product.images.map((img) => {
					return {
						file: img,
						url: window.URL.createObjectURL(img),
					};
				})
			);
		}
	}, []);
	console.log(categories);

	const { handleSubmit } = useForm();

	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
	const InfoFiles = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	)); // dropzone setting

	const formSubmithandler = (data) => {
		console.log(data);

		const postData = {
			name: data.produk_name,
			price: data.produk_price,
			description: data.produk_desc,
			categories: data.produk_categories,
			product_pict: acceptedFiles[0],
		};

		axios
			.post("https://finalsecondhand-staging.herokuapp.com/Product/CreateProduct", postData)
			.then((res) => {
				console.log(res);
				navigate("/daftarjual");
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const options = [
		{ value: "Hobi", label: "Hobi" },
		{ value: "Kendaraan", label: "Kendaraan" },
		{ value: "Baju", label: "Baju" },
		{ value: "Elektronik", label: "Elektronik" },
		{ value: "Kesehaan", label: "Kesehaan" },
	];

	return (
		<div className="col-12 col-lg-4 produk_form_container">
			<form className="infoProdukForm_container" onSubmit={handleSubmit(formSubmithandler)}>
				<label className="infoProduk_label" htmlFor="nama">
					Nama Produk
				</label>
				<div>
					<input type="text" name="produk_name" id="produk_name" required placeholder=" Nama Produk" className="infoProduk_box"></input>
				</div>

				<label className="infoProduk_label" htmlFor="nama">
					Harga Produk
				</label>
				<div>
					<input type="number" name="produk_price" id="produk_price" required placeholder="Harga Produk" className="infoProduk_box"></input>
				</div>

				<label className="infoProduk_label" htmlFor="nama">
					Kategori
				</label>
				<div>
					<Select options={options} className="infoProduk_box infoProduk_lastForm" />
				</div>
				<label className="infoProduk_label" htmlFor="nama">
					Deskrpisi
				</label>
				<div>
					<input type="text" name=" produk_desc" id="produk_desc" required placeholder="Pilihan Produk" className="infoProduk_box"></input>
				</div>
				<div>
					<div className="infoProduk_img" {...getRootProps()}>
						<input {...getInputProps()} />
						<AiOutlinePlusCircle className="infoProduk_icon" />
					</div>
					<p className="dropzone_InfoFiles text-center">{InfoFiles}</p>
				</div>
				<div className="d-flex produk_btnGroup">
					<div className="">
						<button className="produk_btn1 text_reguler" type="button">
							Preview
						</button>
					</div>
					<div className="">
						<button className="produk_btn2 text_reguler" type="submit">
							Terbitkan
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProdukForm;

/*

<input type="text" name=" produk_categories" id="produk_categories" required placeholder="Contoh Jalan" className="infoProduk_box infoProduk_lastForm" {...register("produk_categories")}></input>

*/
