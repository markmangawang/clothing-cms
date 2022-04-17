// Components
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";
import { ReactComponent as SiteLogo } from "../../assets/img/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <SiteLogo className="logo"></SiteLogo>
          </Link>
        </div>
        <div className="links">
          <Link to="/shop" className="link">
            SHOP
          </Link>
          <Link to="/sign-in" className="link">
            SIGN-IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
