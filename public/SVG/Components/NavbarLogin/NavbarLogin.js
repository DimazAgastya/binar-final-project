import React, { useState, useEffect } from "react";
import "./navbarLogin.css";
import { Link } from "react-router-dom";

import { BiListUl } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

import { GiHamburgerMenu } from "react-icons/gi";

const NavbarLogin = () => {
	return (
		<>
			<header id="navlogin" className="mb-5">
				<div className="container pt-2">
					<div className="d-flex m-2 align-items-center">
						{/* LOGO */}
						<div className="col-auto">
							<Link to="/">
								<img src="/images/logo.png" alt="LogoSecondHand" className="logo" />
							</Link>
						</div>

						{/* SEARCH */}
						<div className="col-auto mx-4 flex-grow-1">
							<div>
								<form className="form-inline">
									<input className="form-control form-search" type="text" placeholder="Search..." aria-label="Search" />
								</form>
								{/* <button className="icon"><FiSearch /></button> */}
							</div>
						</div>

						<button className="container ham-menu col-auto d-lg-none">
							<GiHamburgerMenu />
						</button>

						<div className="col-auto d-none d-lg-block">
							<ul className="list-group-horizontal">
								<li className="list-inline-item">
									<Link to="/daftar-jual" className="icons-menu">
										<BiListUl />
									</Link>
								</li>
								<li className="list-inline-item">
									<div className="dropdown-notif">
										<Link to="/notification" className="icons-menu icon-notif">
											<IoIosNotificationsOutline />
										</Link>
										<div className="dropdown-content-notif">
											<div className="align-items-center">
												<div className="container p-4 box-notif">
													<div className="notif1">
														<div>
															<img src="/images/watch.png" alt="" className="img-notif-dropdown" />
														</div>
														<div className="text-notif-product">
															<div className="text-muted small-notifdrop">Penawaran produk</div>
															<div className="desc-notifdrop">Jam Tangan Casio</div>
															<div className="desc-notifdrop">Rp 250.000</div>
															<div className="desc-notifdrop">Ditawar Rp 200.000</div>
														</div>
														<p className="text-muted small-notifdrop time-clock">20 Apr, 14:04</p>
														<div className="alerts-notifdrop rounded-circle"></div>
													</div>

													<hr className="solid" />

													<div className="notif1">
														<div>
															<img src="/images/watch.png" alt="" className="img-notif-dropdown" />
														</div>
														<div className="text-notif-product">
															<div className="text-muted small-notifdrop">Berhasil diterbitkan</div>
															<div className="desc-notifdrop">Jam Tangan Casio</div>
															<div className="desc-notifdrop">Rp 250.000</div>
														</div>
														<p className="text-muted small-notifdrop time-clock">19 Apr, 12:00</p>
														<div className="alerts-notifdrop rounded-circle"></div>
													</div>
													<div></div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="list-inline-item">
									<Link to="/profile" className="icons-menu">
										<BsPerson />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default NavbarLogin;
