import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import DaftarJual from "./Pages/DaftarJual/DaftarJual";
import Notif from "./Pages/Notif/Notif";
import Profile from "./Pages/Profile/Profile";
import NavbarLogin from "./Components/NavbarLogin/NavbarLogin";
import Buyer from "./Pages/Buyer";
import InfoPenawaran from "./Pages/InfoPenawaran";
import Seller from "./Pages/Seller";

export default function App() {
	return (
		<BrowserRouter>
			<NavbarLogin />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/daftar-jual" element={<DaftarJual />} />
				<Route path="/notification" element={<Notif />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/buyer" element={<Buyer />} />
				<Route path="/infopenawaran" element={<InfoPenawaran />} />
				<Route path="/seller" element={<Seller />} />
			</Routes>
		</BrowserRouter>
	);
}
