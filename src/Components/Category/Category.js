import React from "react";
import "./category.css";
import Card from "../Card/Card";
import { FiSearch } from "react-icons/fi";
import FloatButton from "../FloatButton/FloatButton";

const Category = () => {
	return (
		<div className="container">
			<h6>
				<b>Telusuri Kategori</b>
			</h6>
			<div className="d-flex flex-row m-3">
				<button type="button" className="btn m-2">
					<FiSearch className="fi m-1" />
					Semua
				</button>
				<button type="button" className="btn m-2">
					<FiSearch className="fi m-1" />
					Jam
				</button>
				<button type="button" className="btn m-2">
					<FiSearch className="fi m-1" />
					Hobi
				</button>
				<button type="button" className="btn m-2">
					<FiSearch className="fi m-1" />
					Kendaraan
				</button>
				<button type="button" className="btn m-2">
					<FiSearch className="fi m-1" />
					Elektronik
				</button>
			</div>

			{/* CARDS */}
			<div className="container">
				<div className="row card_container">
					<div className="col-lg-12 d-flex justify-content-between gap-1 container-inner">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>

			{/* FLOATING ACTION BUTTON */}
			<FloatButton />
		</div>
	);
};

export default Category;

/*

        <div className='row'>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
			<div className='col-lg-2 col-sm-6 p-1 mb-3'><Card /></div>
        </div>


*/
