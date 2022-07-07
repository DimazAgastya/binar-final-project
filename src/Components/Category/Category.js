import React, { useEffect } from "react";
import "./category.css";
import ProductHome from "../ProductHome/ProductHome";
import { FiSearch } from "react-icons/fi";
import FloatButton from "../FloatButton/FloatButton";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {

	// const getCategory = async () => {
	// 	const category = await fetch("https://finalsecondhand-staging.herokuapp.com/categories")
	// 	const value = await category.json()
	// 	const result = value.categories.map(data => {
	// 		return {
	// 			label: data
	// 		}
	// 	})
	// 	console.log(result)
	// }

	// const categories = useSelector(store => store.category)
	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	axios.get('https://finalsecondhand-staging.herokuapp.com/categories/')
	// 	.then(response => {
	// 		dispatch({
	// 			type: 'populateCategories',
	// 			payload: {
	// 				categories: [...response.data]
	// 			}
	// 		})
	// 	})
	// }, [])

	return (
		<div className="container">
			<h6 className="telusur-cate">Telusuri Kategori</h6>
			<div className="d-flex flex-row m-3">
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Semua
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Hobi
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Kendaraan
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Baju
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Elektronik
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Kesehatan
				</button>
			</div>

			{/* CARDS */}
			<ProductHome />

			{/* FLOATING ACTION BUTTON */}
			<FloatButton />
		</div>
	);
};

export default Category;
