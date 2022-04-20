import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './style.user.scss';
import buttonAdd from '../figures/buttonAdd.svg';

function UserAccount() {
  return (
    <div>
      <Header />
      <p id="first">MyAccount</p>
      <div className="body">
        <div className="title">
          <p>Settings</p>
        </div>
        <p className="subtitle">Username/Email</p>
        <p className="text">user123@gmail.com</p>
        <p className="subtitle">Password</p>
        <p className="text">***********</p>
        <input className="button" type="button" value="Change" />
      </div>
      <div className="body">
        <div className="title">
          <p>Vehicle Details</p>
        </div>
        <p className="subtitle">Vehicles</p>
        <p className="text">No saved vehicles</p>
        <button><img src={buttonAdd} alt="my image" onClick={console.log("Hello word")} /></button>
        <p className="text">Add a Vehicle</p>
      </div>
      <div className="body">
        <div className="title">
          <p>Reservas Recurrentes</p>
        </div>
        <p className="text">Add a Reserve</p>
      </div>
      <div className="body">
        <div className="title">
          <p>Resservas Pasadas</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserAccount;
