import React from "react";
import "./infoProduk.css";
import { Link } from "react-router-dom";

const ProdukHeader = () => {
	return (
		<>
			<div className="arrow d-flex produk_header_container">
				<Link to="/" className="link_profile">
					<img
						src="/SVG/arrow_left.svg"
						alt="arrow icon"
						className=" infoProduk_arrow
        "
					/>
				</Link>
				<div className="">
					<h2 className="text_reguler produk_header">Lengkapi Detail Produk</h2>
				</div>
			</div>
		</>
	);
};

export default ProdukHeader;
