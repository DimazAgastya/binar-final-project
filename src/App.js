import './App.css';
import EarlyNavbar from './Components/EarlyNavbar/EarlyNavbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Notif from './Pages/Notif/Notif';
import Profile from './Pages/Profile/Profile';
import NavbarLogin from './Components/NavbarLogin/NavbarLogin';

export default function App() {
  return (
    <BrowserRouter>
      <NavbarLogin />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/notification" element={<Notif />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
