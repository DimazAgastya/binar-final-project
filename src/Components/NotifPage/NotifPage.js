import React from 'react';
import './notifPage.css';
import { Link } from "react-router-dom";

const NotifPage = () => {
  return (
    <>
    <div className='container align-items-center'>
      <div className='px-3 py-4 box-notifpage'>
        <Link to='/infopenawaran'>
          <div className='notifpage py-1'>
            <div className='wrapper-img-notif'>
							<img src="/images/jamCowo.png" alt="" className="img-notifpage" />
						</div>
            <div className="text-notifpage">
							<div className="text-muted small-notifpage">Penawaran produk</div>
							<div className="desc-notifpage">Jam Tangan Casio</div>
              <div className="desc-notifpage">Rp 250.000</div>
							<div className="desc-notifpage">Ditawar Rp 200.000</div>
						</div>
						<p className="text-muted small-notifpage time-clock-notifpage">20 Apr, 14:04</p>
          </div>
        </Link>

        <hr className="m-0"/>

        <Link to='/infopenawaran'>
          <div className='notifpage py-1'>
            <div className='wrapper-img-notif'>
							<img src="/images/jamCowo.png" alt="" className="img-notifpage" />
						</div>
            <div className="text-notifpage">
							<div className="text-muted small-notifpage">Penawaran produk</div>
							<div className="desc-notifpage">Jam Tangan Casio</div>
              <div className="desc-notifpage">Rp 250.000</div>
							<div className="desc-notifpage">Ditawar Rp 200.000</div>
						</div>
						<p className="text-muted small-notifpage time-clock-notifpage">20 Apr, 14:04</p>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default NotifPage