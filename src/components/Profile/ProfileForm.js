import React, { useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userSlice from "../../store/UserSlice";
import jwtDecode from "jwt-decode";
import { useDropzone } from "react-dropzone";

const ProfileForm = () => {
	// dropzone
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const InfoFiles = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [profileStatus, setProfileStatus] = useState({
		success: false,
		message: "",

		/*
			{!setProfileStatus.sucess && setProfileStatus.message && <p className="text-danger  m-0 ">{setProfileStatus.message}</p>}

	*/
	});

	const formSubmithandler = (data) => {
		console.log(data);

		const postData = {
			name: data.user_name,
			city_id: data.user_city,
			address: data.user_address,
			no_hp: data.user_phone,
			profile_pict: acceptedFiles[0],
			// profile_pict: data.user_pict,
		};

		const ContentType = {
			"Content-Type": "multipart/form-data'",
			Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZGVzdWdpYW50ckBnbWFpbC5jb20iLCJpYXQiOjE2NTUyMzAyNzl9.Ym2kWPQbT-ft-hWZQan8ncEEbXhoVtG4suiSGdN9wek",
		};

		const tokens = localStorage.getItem("secondHandToken");

		axios
			.put("https://finalsecondhand-staging.herokuapp.com/user/update", postData, {
				headers: {
					Authorization: `Bearer ${ContentType} ${tokens}`,
				},
			})
			.then((res) => {
				console.log(res);
				const user = jwtDecode(res.data.token);
				axios.get(`https://finalsecondhand-staging.herokuapp.com/User/DetailUser${user.sub}`).then((res) => {
					dispatch(
						userSlice.actions.addUser({
							userData: res.data,
						})
					);
					// jika sudah update maka diarahkan ke :
					navigate("/daftarjual");
				});
			})
			.catch((err) => {
				setProfileStatus({
					success: false,
					message: "failed to update Profile,please check your Connection",
				});
			});
	};

	/* useEffect(() => {
		axios.get("https://finalsecondhand-staging.herokuapp.com/cities").then((Response) => {
			dispatch({
				type: "populateProducts",
				payload: {
					products: [...Response.data],
				},
			});
		});
	}, []);
	
	*/

	// drupzone

	return (
		<>
			<div className="profile_form_container">
				<form className="profile_register_form" onSubmit={handleSubmit(formSubmithandler)}>
					<div className="profile_subHeader_container">
						<div className="profile_header_lg d-none d-lg-block">
							<h3 className="">Lengkapi info account</h3>
						</div>
						<div className="profile_photo_section">
							<div {...getRootProps()} className="profile_dummy_dropzone" name="user_pict" id="user_pict">
								<input {...getInputProps()} name="user_pict" id="user_pict" {...register("acceptedFiles")} />
								{<p className="text_small text-center mt-5">Or simply drop here</p>}
							</div>
						</div>
						<p className="dropzone_InfoFiles text-center">{InfoFiles}</p>
					</div>
					<label className="profile_label text_small" htmlFor="user_name">
						Nama
					</label>
					<div>
						<input type="text" name="user_name" id="user_name" required placeholder="Nama Lengkap" className="profile_input_box" {...register("user_name")}></input>
					</div>
					<label className="profile_label text_small" htmlFor="user_city">
						Kota
					</label>
					<div className="select_container">
						<select id="user_city" className="select_border" {...register("user_city")}>
							<option disabled>Pilih Kota</option>
							<option>1</option>
							<option>2</option>
						</select>
					</div>
					<label className="profile_label" htmlFor="user_address">
						Alamat
					</label>
					<div>
						<input type="text" name="user_address" id="user_address" required placeholder=" contoh alamat" className="profile_input_box" {...register("user_address")}></input>
					</div>
					<label className="profile_label text_small" htmlFor="user_phone">
						No Handpone
					</label>
					<div>
						<input type="number" name="user_phone" id="user_phone" required placeholder=" contoh: +628123456789" className="profile_input_box" {...register("user_phone")}></input>
					</div>
					<button type="submit" className="btn_profile_submit mt-5">
						Simpan
					</button>
				</form>
			</div>
		</>
	);
};

export default ProfileForm;

// navigate("/daftarjual");

/*

		axios
			.put("https://finalsecondhand-staging.herokuapp.com/User/UpdateUser", postData)
			// perubahan data user

			.then((res) => {
				console.log(res);

				const user = jwtDecode(res.data.acessToken);
				axios.get(`https://finalsecondhand-staging.herokuapp.com/User/DetailUser${user.sub}`).then((res) => {
					dispatch(
						userSlice.actions.addUser({
							userData: res.data,
						})
					);
					// jika sudah update maka diarahkan ke :
					navigate("/daftarjual");
				});
			})

			.catch((err) => {
				setProfileStatus({
					success: false,
					message: "failed to update Profile,please check your Connection",
				}



						{products.map((product, index) => {
						return (
							<select id="user_city" className="select_border" {...register("user_city")} product={product} key={`	product-${index}`}>
								<option disabled>Pilih Kota</option>
								<option>Bali</option>
								<option>Singkawang</option>
							</select>
						);
					})}

*/
