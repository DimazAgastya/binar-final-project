import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DaftarJual from "./Pages/DaftarJual/DaftarJual";
import Notif from "./Pages/Notif/Notif";
import Profile from "./Pages/Profile/Profile";
import NavbarLogin from "./Components/NavbarLogin/NavbarLogin";
import Buyer from "./Pages/Buyer";
import InfoPenawaran from "./Pages/InfoPenawaran";
import Seller from "./Pages/Seller";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import Account from "./Pages/Account";
import ProfileDimaz from "./Pages/Profile";
import DaftarJualDimaz from "./Pages/DaftarJual";
import InfoProduk from "./Pages/InfoProduk";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/daftar-jual" element={<DaftarJual />} />
				<Route path="/notification" element={<Notif />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/buyer" element={<Buyer />} />
				<Route path="/infopenawaran" element={<InfoPenawaran />} />
				<Route path="/seller" element={<Seller />} />
				<Route path="/daftarJual" element={<DaftarJual />}></Route>
				<Route path="/infoProduk" element={<InfoProduk />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/account" element={<Account />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/ProfileDimaz" element={<ProfileDimaz />}></Route>
				<Route path="/DaftarJualDimaz" element={<DaftarJualDimaz />}></Route>
			</Routes>
		</>
	);
}

// 	<NavbarLogin/>
