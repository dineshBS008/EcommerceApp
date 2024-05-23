import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import {GiShoppingBag} from 'react-icons/gi';

const Header = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid ">
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
          </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to="/" className="navbar-brand text-black-50" > 🛒 Ecommerce App</Link>

      <ul className="navbar-nav  mb-2  ">
        <li className="nav-item"></li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-decoration-none text-black-50">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/category" className="nav-link text-black-50">Category</NavLink>
          </li>

        <li className="nav-item">
          <NavLink to="/register" className="nav-link text-black-50" href="#">Register</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/login" className="nav-link text-black-50" href="#">Login</NavLink>
        </li>

        <li className="nav-item ">
          <NavLink to="/cart" className="nav-link text-black-50 " href="#">Cart(0)</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
</>
  );
};

export default Header;
