import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavbarLink } from "./NavbarLink";
import Axios from "axios";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(
      (res) => {
        setCategories(res.data.categories);
      }
    );
  }, []);

  const linkClickController = () => {
    document.querySelector("a.sidebarToggler").click();
  };

  return (
    <div className="container-fluid">
      <div className="row py-3">
        <div className="col-xl-2 col-lg-4 navbarBox">
          <a
            className="sidebarToggler"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            R
          </a>
          <Link to="/" className="ms-3">
            Recipes
          </Link>
          <div
            className="offcanvas offcanvas-start sidebar"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Recipes
              </h5>
              <button
                type="button"
                className="text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <div className="mb-3">Meal Categories</div>
              <ul className="navbar-nav mb-2 mb-lg-0">
                {categories.map((category) => (
                  <NavbarLink
                    clickEvent={linkClickController}
                    key={category.idCategory}
                    href={"category/" + category.strCategory}
                    title={category.strCategory}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
