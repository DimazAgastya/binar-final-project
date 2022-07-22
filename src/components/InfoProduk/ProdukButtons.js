import React from "react";

const ProdukButtons = () => {
	return (
		<div class="d-flex produk_btnGroup">
			<div className="">
				<button class="produk_btn1 text_reguler" type="button">
					Preview
				</button>
			</div>
			<div className="">
				<button class="produk_btn2 text_reguler" type="button">
					Terbitkan
				</button>
			</div>
		</div>
	);
};

export default ProdukButtons;
