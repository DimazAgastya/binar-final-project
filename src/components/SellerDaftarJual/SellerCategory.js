import React from "react";
import { FiBox, FiStar, FiChevronRight } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { CgDollar } from "react-icons/cg";

const SellerCategory = () => {
	return (
		<div className="container category_container ">
			<h5 className="text_reguler category_subHeader">Kategori</h5>
			<div className="d-flex mb-3">
				<FiBox className="icon_category_seller" alt="box" />
				<p className="text_reguler category_text">Semua Produk</p>
				<FiChevronRight alt="arrow right" className="icon_right" />
			</div>
			<hr></hr>
			<div className="d-flex mb-3">
				<GrFavorite className="icon_category_seller" alt="box" />
				<p className="text_reguler category_text">Diminati</p>
				<FiChevronRight alt="arrow right" className="icon_right_2" />
			</div>
			<hr></hr>

			<div className="d-flex ">
				<CgDollar className="icon_category_seller" alt="box" />
				<p className="text_reguler category_text">Terjual</p>
				<FiChevronRight alt="arrow right" className="icon_right_3" />
			</div>

			<hr></hr>

			<div className="d-flex ">
				<FiStar className="icon_category_seller" alt="box" />
				<p className="text_reguler category_text">Wishlist</p>
				<FiChevronRight alt="arrow right" className="icon_right_4" />
			</div>
		</div>
	);
};

export default SellerCategory;
