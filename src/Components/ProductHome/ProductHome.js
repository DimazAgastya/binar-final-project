import React, { useEffect, useState } from "react";
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
				{/* <div className='style_producthome'> */}
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/91/9d/ad/919dad52c0f041b6442c8b452bd6111a.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">I Might Regret This</h5>
							<small className="card-text text-muted">Buku</small>
							<p className="card-text mt-2">Rp50.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/e9/dc/26/e9dc26e2ffeb82fcfeb31ab60449b6a8.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Jam Tangan Nike</h5>
							<small className="card-text text-muted">Jam Tangan</small>
							<p className="card-text mt-2">Rp150.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/9c/68/85/9c6885ec7baaaca1ce1d0d8f4d4f35e3.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Dinosaur Wallet</h5>
							<small className="card-text text-muted">Dompet</small>
							<p className="card-text mt-2">Rp55.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/78/19/9c/78199c025f5bebc2aed87999d300f6a2.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Crochet Duck</h5>
							<small className="card-text text-muted">Doll</small>
							<p className="card-text mt-2">Rp65.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/736x/d7/c5/c3/d7c5c3d0442a64c8b0aef7316c0c1db5.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Retro Bluetooth Speaker</h5>
							<small className="card-text text-muted">Speaker</small>
							<p className="card-text mt-2">Rp75.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/e9/dc/26/e9dc26e2ffeb82fcfeb31ab60449b6a8.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Jam Tangan Nike</h5>
							<small className="card-text text-muted">Jam Tangan</small>
							<p className="card-text mt-2">Rp150.000</p>
						</div>
					</div>


					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/a1/80/80/a180805e64f33d58cd15767f0e2eaf0e.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Aesthetic Keyboard</h5>
							<small className="card-text text-muted">Keyboard</small>
							<p className="card-text mt-2">Rp100.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/cc/d7/80/ccd7804970ca1f5640f9b43e175aa6f3.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Case Handphone</h5>
							<small className="card-text text-muted">Aksesoris</small>
							<p className="card-text mt-2">Rp65.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/736x/5f/56/1f/5f561f2a071fd6f1437d08ce2f5ba4a3.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Mouse Kiyowo</h5>
							<small className="card-text text-muted">Mouse</small>
							<p className="card-text mt-2">Rp70.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/91/9d/ad/919dad52c0f041b6442c8b452bd6111a.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">I Might Regret This</h5>
							<small className="card-text text-muted">Buku</small>
							<p className="card-text mt-2">Rp50.000</p>
						</div>
					</div>
					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/564x/24/5d/34/245d3410bf1c7743cda0f64095fe3570.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Crochet Pig</h5>
							<small className="card-text text-muted">Doll</small>
							<p className="card-text mt-2">Rp85.000</p>
						</div>
					</div>



					<div className="card style_card_home">
						<img className="card-img-top p-2 style_img" src="https://i.pinimg.com/736x/e1/32/2d/e1322da621635c570ef2dd0ba46bedd0.jpg" alt="Card image" />
						<div className="card-body">
							<h5 className="card-title">Crochet Frog</h5>
							<small className="card-text text-muted">Doll</small>
							<p className="card-text mt-2">Rp75.000</p>
						</div>
					</div>



					
				{/* </div> */}
			</div>



			{/* FLOATING ACTION BUTTON */}
			<FloatButton />
		</div>
	);
};

export default Category;
