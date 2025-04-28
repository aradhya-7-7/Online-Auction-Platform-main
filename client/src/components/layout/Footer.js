import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8 px-4 mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="mb-3 font-bold">Hammer Drop</h5>
            <p className="text-white/80">
              A platform for buying and selling items through online auctions.
            </p>
          </div>

          <div className="col-md-2">
            <h5 className="mb-3 font-bold">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  className="text-white/80 text-decoration-none hover:text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-white/80 text-decoration-none hover:text-white"
                  to="/auctions"
                >
                  Auctions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-white/80 text-decoration-none hover:text-white"
                  to="/products"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <h5 className="mb-3 font-bold">Account</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  className="text-white/80 text-decoration-none hover:text-white"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-white/80 text-decoration-none hover:text-white"
                  to="/register"
                >
                  Register
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-white/80 text-decoration-none hover:text-white"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="mb-3 font-bold">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2 text-white/80">
                Email➡️
                <a
                  href="mailto:aradhya610@gmail.com"
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  aradhya610@gmail.com
                </a>
              </li>

              {/* <li className="mb-2 text-white/80">Phone: +1 (123) 456-7890</li>
              <li className="mb-2 text-white/80">Address: 123 Auction St, City, Country</li> */}
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-4" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-white/60">
              &copy; {new Date().getFullYear()} Hammer Drop. All rights
              reserved.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
  <ul className="list-inline mb-0">
    <li className="list-inline-item ms-3">
      <a
        href="https://github.com/aradhya-7-7"
        className="text-white/80 hover:text-white fs-5"
        target="_blank" rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </li>
    <li className="list-inline-item ms-3">
      <a
        href="https://www.linkedin.com/in/aradhya08oc01/"
        className="text-white/80 hover:text-white fs-5"
        target="_blank" rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
    </li>
  </ul>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
