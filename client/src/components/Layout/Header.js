import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SerachInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand text-black-50">
              {" "}
              🛒 Ecommerce App
            </Link>

            <ul className="navbar-nav mb-2">
              <SearchInput />
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-decoration-none text-black-50"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link text-black-50">
                      Register
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link text-black-50">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {/* Issue from here */}
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link  text-black-50 dropdown-toggle button-no-border mt-2"
                      onClick={toggleDropdown}
                      type="button"
                      aria-expanded={dropdownOpen}
                    >
                      {auth?.user?.name?.toUpperCase()}
                    </button>
                    <ul
                      className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                    >
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                          onClick={toggleDropdown}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => {
                            handleLogout();
                            toggleDropdown();
                          }}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* Issue to here */}
                </>
              )}

              <li className="nav-item">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link text-black-50">
                    Cart
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
