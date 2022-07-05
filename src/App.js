import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Diminati from "./Pages/Diminati/SellerDiminati";
import Notif from "./Pages/Notif/Notif";
import Profile from "./Pages/Profile/Profile";
import NavbarLogin from "./Components/NavbarLogin/NavbarLogin";
import Sidebar from "./Components/Sidebar/Sidebar";
import Buyer from "./Pages/Buyer";
import InfoPenawaran from "./Pages/InfoPenawaran";
import Seller from "./Pages/Seller";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import Account from "./Pages/Account";
import DaftarJual from "./Pages/DaftarJual";
import InfoProduk from "./Pages/InfoProduk";

export default function App() {
	return (
		<>
			<NavbarLogin />
			<Sidebar />
			<Routes>
			
				<Route path="/" element={<Home />} />
				<Route path="/daftar-jual" element={<DaftarJual />} />
				<Route path="/notification" element={<Notif />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/buyer" element={<Buyer />} />
				<Route path="/infopenawaran" element={<InfoPenawaran />} />
				<Route path="/seller" element={<Seller />} />
				<Route path="/diminati" element={<Diminati />}></Route>
				<Route path="/infoProduk" element={<InfoProduk />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/account" element={<Account />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/daftarJual" element={<DaftarJual />}></Route>
			</Routes>
		</>
	);
}
