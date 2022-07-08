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
import Login from "./Pages/Login";
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
				<Route path="/notification" element={<Notif />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/buyer/:id" element={<Buyer />} />
				<Route path="/infopenawaran/:id" element={<InfoPenawaran />} />
				<Route path="/seller/:id" element={<Seller />} />
				<Route path="/diminati" element={<Diminati />}></Route>
				<Route path="/infoProduk" element={<InfoProduk />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/account" element={<Account />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/daftarjual" element={<DaftarJual />}></Route>
			</Routes>
		</>
	);
}
