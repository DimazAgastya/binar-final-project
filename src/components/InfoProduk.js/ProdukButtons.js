import React from "react";
import "./info.css";

const ProdukButtons = () => {
	return (
		<div class="d-flex produk_btnGroup">
			<div className="">
				<button class="produk_btn1" type="button">
					Preview
				</button>
			</div>
			<div className="">
				<button class="produk_btn2" type="button">
					Terbitkan
				</button>
			</div>
		</div>
	);
};

export default ProdukButtons;
