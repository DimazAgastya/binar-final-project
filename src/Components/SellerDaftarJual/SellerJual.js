import React from "react";
import "./daftarJual.css";
import SliderSeller from "./SliderSeller";
import ProfileSeller from "./ProfileSeller";
import AllProduct from "./AllProduct";
import SellerCategory from "./SellerCategory";
import InterestedProduct from "./InterestedProduct";
// import EarlyNavbar from "../Navbar/EarlyNavbar";

const daftarJual = () => {
	return (
		<div>
			{/* <section className="d-none d-lg-block">
				<EarlyNavbar />
			</section> */}
			<div className="container mt-3">
				<section className="d-flex seller_header">
					<div className=" d-lg-none">
						<img src="/SVG/menu.svg" alt="menu icon" className=" seller_menu" />
					</div>
					<h2>Daftar Jual Saya</h2>
				</section>
				<section>
					<ProfileSeller />
				</section>
				<section className="swiper_section container d-md-none">
					<SliderSeller />
				</section>
				<section className=" main_container row">
					<div className="d-none d-lg-block col-lg-3">
						<SellerCategory />
					</div>
					{/* <div className="col-lg-9 card_group_container">
						<AllProduct />
					</div> */}
					<div className="col-lg-9 py-4 text-center card_group_container">
						<InterestedProduct />
					</div>
				</section>
			</div>
		</div>
	);
};

export default daftarJual;

/*


<div className="profile ">
					<div className="row">
						<div className="image_position col-6"></div>
						<div className="col-6 seller_bio">
							<h6 className="">Nama Penjual</h6>
							<p>Kota</p>
						</div>
					</div>
				</div>
				<button className="btn_seller_bio">Edit</button>


*/
