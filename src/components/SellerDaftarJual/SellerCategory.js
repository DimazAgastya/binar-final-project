import React from "react";
import { Link } from "react-router-dom";

const SellerCategory = () => {
	return (
		<div className="container category_container ">
			<h5 className="text_reguler category_subHeader">Kategori</h5>
			<Link to="/daftarjual" className="seller_link">
				<div className="d-flex mb-3">
					<img src="/SVG/box.svg" alt="box" />
					<p className="text_reguler category_text1">Semua Produk</p>
					<img src="/SVG/right.svg" alt="arrow right" className="icon_right" />
				</div>
			</Link>

			<hr></hr>
			<Link to="/diminati" className="seller_link">
				<div className="d-flex mb-3">
					<img src="/SVG/heart.svg" alt="box" />
					<p className="text_reguler category_text2">Diminati</p>
					<img src="/SVG/right.svg" alt="arrow right" className="icon_right_2" />
				</div>
			</Link>
			<hr></hr>
			<Link to="/terjual" className="seller_link">
				<div className="d-flex mb-3">
					<img src="/SVG/dollar.svg" alt="box" />
					<p className="text_reguler category_text2">Terjual</p>
					<img src="/SVG/right.svg" alt="arrow right" className="icon_right_3" />
				</div>
			</Link>
			<hr></hr>
			<Link to="/wishlist" className="seller_link">
				<div className="d-flex mb-3">
					<img src="/SVG/shopping-cart.svg" alt="box" />
					<p className="text_reguler category_text2">Wishlist</p>
					<img src="/SVG/right.svg" alt="arrow right" className="icon_right_2" />
				</div>
			</Link>
		</div>
	);
};

export default SellerCategory;
