import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import Protected from "./Components/HOC/Protected";
import Unprotected from "./Components/HOC/Unprotected";

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logout" element={<Logout />} />

				{/* UNPROTECTED */}
				<Route path="/" element={<Unprotected />}>
					<Route path="login" element={<Login />}></Route>
				</Route>
				<Route path="/" element={<Unprotected />}>
					<Route path="register" element={<Register />}></Route>
				</Route>

				{/* PROTECTED */}
				<Route path="/" element={<Protected />}>
					<Route path="profile" element={<Profile />} />
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="notification" element={<Notif />} />
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="infoProduk" element={<InfoProduk />} />
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="/daftarjual" element={<DaftarJual />}>
						<Route path="semua" />
						<Route path="diminati" element={<Diminati />} />
						<Route path="terjual" />
						<Route path="wishlist" />
					</Route>
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="/buyer/:id" element={<Buyer />} />
					<Route path="/infopenawaran/:id" element={<InfoPenawaran />} />
					<Route path="/seller/:id" element={<Seller />} />
				</Route>
				<Route path="/" element={<Protected />}>
					<Route path="/account" element={<Account />}></Route>
				</Route>

			</Routes>
		</>
	);
}

// <Route path="/terjual" element={<Terjual />}></Route>
//<Route path="/wishlist" element={<Wishlist />}></Route>
