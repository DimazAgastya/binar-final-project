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
				<div className="container py-1">
					<div className="d-flex m-2 align-items-center">
						{/* LOGO */}
						<div className="col-auto">
							<Link to="/">
								<img src="/images/logo.png" alt="LogoSecondHand" className="logo" />
							</Link>
						</div>

						{/* SEARCH */}
						<div className="col-auto mx-4 flex-grow-1">
								<form className="form-inline">
									<input className="search-navbar form-control" type="text" placeholder="Search..." aria-label="Search" />
								</form>
						</div>

						<button className="container ham-menu col-auto d-lg-none">
							<GiHamburgerMenu />
						</button>

						<div className="col-auto d-none d-lg-block">
							<ul className="list-group-horizontal">
								{/* DAFTAR JUAL */}
								<li className="list-inline-item">
									<Link to="/daftar-jual" className="icons-menu">
										<BiListUl />
									</Link>
								</li>

								{/* DROPDOWN NOTIF */}
								<li className="list-inline-item">
									<div className="dropdown-notif">
										<div className="icons-menu">
											<IoIosNotificationsOutline />
										</div>

										<div className="dropdown-content-notif">
											<div className="align-items-center">
												<div className="px-3 py-2 box-notif">
													<Link to='/notification'>
													<div className="notif1 py-1">
														<div>
															<img src="/images/jamCowo.png" alt="" className="img-notif-dropdown" />
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
													</Link>

													<hr className="m-0"/>
													
													<Link to='/notification'>
													<div className="notif1 py-1">
														<div>
															<img src="/images/jamCowo.png" alt="" className="img-notif-dropdown" />
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
													</Link>

													<hr className="m-0"/>
													
													<Link to='/notification'>
													<div className="notif1 py-1">
														<div>
															<img src="/images/jamCowo.png" alt="" className="img-notif-dropdown" />
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
													</Link>
													
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
