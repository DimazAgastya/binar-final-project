import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import Profile from "./Pages/Profile";
import DaftarJual from "./Pages/DaftarJual";
import InfoProduk from "./Pages/InfoProduk";
import Diminati from "./Pages/Diminati";
import Terjual from "./Pages/Terjual";
import Wishlist from "./Pages/Wishlist";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />}></Route>
			<Route path="/register" element={<Register />}></Route>
			<Route path="/account" element={<Account />}></Route>
			<Route path="/profile" element={<Profile />}></Route>
			<Route path="/daftarJual" element={<DaftarJual />}></Route>
			<Route path="/infoProduk" element={<InfoProduk />}></Route>
			<Route path="/diminati" element={<Diminati />}></Route>
			<Route path="/terjual" element={<Terjual />}></Route>
			<Route path="/wishlist" element={<Wishlist />}></Route>
		</Routes>
	);
}

export default App;
