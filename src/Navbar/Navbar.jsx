import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg start-0 w-100 py-3 px-5 d-flex justify-content-between">
      <div class="container-fluid">
        <Link class="navbar-brand" to=''><h1>Start Framework</h1></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center me-5 my-auto">

            <li class="nav-item mx-3">
              <NavLink className={({ isActive }) => (isActive ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link" : "text-decoration-none fw-semibold fs-5")} to='about' id="nav-link">About</NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink className={({ isActive }) => (isActive ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link" : "text-decoration-none fw-semibold fs-5")} to='/portfolio' id="nav-link">Portofolio</NavLink>
            </li>
            <li class="nav-item mx-3">
              <NavLink className={({ isActive }) => (isActive ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link" : "text-decoration-none fw-semibold fs-5")} to='contact' id="nav-link">Contact</NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>

  );
}