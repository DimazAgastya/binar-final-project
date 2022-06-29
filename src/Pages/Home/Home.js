import React from "react";
import Slider from "../../Components/Slider/Slider";
import Category from "../../Components/Category/Category";
import HomeNavbar from "../../Components/NavbarLogin/NavbarLogin";

const Home = () => {
	return (
		<>
			<HomeNavbar />
			<Slider />
			<Category />
		</>
	);
};

export default Home;
