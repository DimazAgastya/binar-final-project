import React, { useEffect, useState, useRef } from "react";
import "./producthome.css";
import { FiSearch } from "react-icons/fi";
import FloatButton from "../FloatButton/FloatButton";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {

	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState([]);

	useEffect(() => {
		axios.get('https://finalsecondhand-staging.herokuapp.com/product/')
			.then(res => {
				setProducts(res.data.data.rows);
			})

	}, [])

	const categoryButton = () => {

	}

	return (
		<div className="container">
			{/* CATEGORY */}
			<h6 className="telusur-cate">Telusuri Kategori</h6>
			<div className="d-flex flex-row m-3 overflow-auto">
				<button onClick={categoryButton}
					type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Semua
				</button>
				<button id='1' onClick={categoryButton}
					type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Hobi
				</button>
				<button id='2' onClick={categoryButton}
					type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Kendaraan
				</button>
				<button id='3' onClick={categoryButton}
					type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Baju
				</button>
				<button id='4' onClick={categoryButton}
					type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Elektronik
				</button>
				<button id='5' onClick={categoryButton}
					type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Kesehatan
				</button>
			</div>

			{/* CARDS */}
			<div className='style_producthome'>
				{products.map((product, id) => {
					return (
						<Link to={`/buyer/${id}`}>
							<div className="card style_card_home" key={id}>
								<img className="card-img-top p-2 style_img" src={product.product_pic} alt="Card image" />
								<div className="card-body">
									<h5 className="card-title">{product.name}</h5>
									<small className="card-text text-muted">{product.description}</small>
									<p className="card-text mt-2">Rp {product.price}</p>
								</div>
							</div>
						</Link>
					)
				})}
			</div>



			{/* FLOATING ACTION BUTTON */}
			<FloatButton />
		</div>
	);
};

export default Category;
