import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Diminati from "./Pages/Diminati/SellerDiminati";
import Notif from "./Pages/Notif/Notif";
import Profile from "./Pages/Profile/Profile";
import Buyer from "./Pages/Buyer/Buyer";
import InfoPenawaran from "./Pages/InfoPenawaran/InfoPenawaran";
import Seller from "./Pages/Seller/Seller";
import Register from "./Pages/Register/Register.js";
import Login from "./Pages/Login/Logins";
import Account from "./Pages/Account/Account";
import DaftarJual from "./Pages/DaftarJual/DaftarJual";
import InfoProduk from "./Pages/InfoProduk/InfoProduk";
import Logout from "./Components/Login/logout";

export default function App() {
	return (
		<>
			{/* <NavbarLogin /> */}
			<Nav />
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
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/account" element={<Account />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/daftarJual" element={<DaftarJual />}></Route>
				<Route path="/diminati" element={<Diminati />}></Route>
				<Route path="/logout" element={<Logout />}></Route>
			</Routes>
		</>
	);
}

// <Route path="/terjual" element={<Terjual />}></Route>
//<Route path="/wishlist" element={<Wishlist />}></Route>
