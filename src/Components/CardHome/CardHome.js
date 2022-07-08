import React, { useEffect } from "react";
import "./cardHome.css";

const CardHome = (props) => {

	return (
		<>
			<div className="card style_card_home">
				<img className="card-img-top p-2 style_img" src={props.product_pic} alt="Card image" />
				<div className="card-body">
					<h5 className="card-title">{props.product.name}</h5>
					<small className="card-text text-muted">{props.product.description}</small>
					<p className="card-text mt-2">Rp {props.product.price}</p>
				</div>
			</div>
		</>
	);
};

export default CardHome;
