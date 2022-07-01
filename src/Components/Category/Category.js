import React from "react";
import "./category.css";
import CardHome from "../CardHome/CardHome";
import { FiSearch } from "react-icons/fi";
import FloatButton from "../FloatButton/FloatButton";

const Category = () => {
	return (
		<div className="container">
			<h6 className="telusur-cate">Telusuri Kategori</h6>
			<div className="d-flex flex-row m-3">
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Semua
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Jam
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Hobi
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Kendaraan
				</button>
				<button type="button" className="btn-cate m-2">
					<FiSearch className="fi m-1" />
					Elektronik
				</button>
			</div>

			{/* CARDS */}
				<div className="card-home-wrapper">
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
					<div className="card-home-inner"><CardHome /></div>
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
