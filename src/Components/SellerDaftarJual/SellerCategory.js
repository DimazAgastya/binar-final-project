import React from "react";

const SellerCategory = () => {
	return (
		<div className="container category_container ">
			<h5 className="text_reguler category_subHeader">Kategori</h5>
			<div className="d-flex mb-3">
				<img src="/SVG/box.svg" alt="box" />
				<p className="text_reguler category_text1">Semua Produk</p>
				<img src="/SVG/right.svg" alt="arrow right" className="icon_right" />
			</div>
			<hr></hr>
			<div className="d-flex mb-3">
				<img src="/SVG/heart.svg" alt="box" />
				<p className="text_reguler category_text2">Diminati</p>
				<img src="/SVG/right.svg" alt="arrow right" className="icon_right_2" />
			</div>
			<hr></hr>

			<div className="d-flex ">
				<img src="/SVG/dollar.svg" alt="box" />
				<p className="text_reguler category_text2">Terjual</p>
				<img src="/SVG/right.svg" alt="arrow right" className="icon_right_3" />
			</div>
		</div>
	);
};

export default SellerCategory;
