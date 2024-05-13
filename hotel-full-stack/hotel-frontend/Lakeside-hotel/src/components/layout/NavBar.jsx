import React, { useContext, useState } from "react"
import { NavLink, Link } from "react-router-dom"



const NavBar = () => {
	
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					<span className="hotel-color">lakeSide Hotel</span>
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to={"/browse-all-rooms"}>
								Browse all rooms
							</NavLink>
						</li>
                        <li className="nav-item">
							<NavLink className="nav-link" aria-current="page" to={"/Admin"}>
								Admin
							</NavLink>
						</li>

					</ul>

                <ul className="d-flex navbar-nav">

                        <li className="nav-item">
							<NavLink className="nav-link" to={"/find-booking"}>
								Find my booking
							</NavLink>
						</li>


                        <li className="nav-item dropdown">
							<a></a>
							<ul
								className={`dropdown-menu`}
								aria-labelledby="navbarDropdown">
								
									<li>
										<Link className="dropdown-item" to={"/login"}>
											Login
										</Link>
									</li>
                                    <li>
										<Link className="dropdown-item" to={"/profile"}>
											Profile
										</Link>
									</li>
                                    <li>
										<Link className="dropdown-item" to={"/logout"}>
											Logout
										</Link>
									</li>

								
							</ul>
						</li>

                </ul>



				</div>
			</div>
		</nav>
	)
}

export default NavBar