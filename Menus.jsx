/* eslint-disable */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import SignupPage from '../../pages/sign-up';
import City from '../../pages/City';
import Search from '../../pages/Search';
import LoginPage from '../../pages/Login';
import Booking from '../../pages/Booking';
import AdminPage from '../../pages/AdminPage';
import CreateParkingsPage from '../../pages/CreateParkingsPage';
import './Menus.scss';
import NavBar from '../NavBar/NavBar';
import UserAccount from '../../pages/User';

function Menus() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LogUp" element={<SignupPage />} />
        <Route path="/LogIn" element={<LoginPage />} />
        <Route path="/Cities" element={<City />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path='/userAccount' element={<UserAccount />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/CreateParkingsPage" element={<CreateParkingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Menus;
