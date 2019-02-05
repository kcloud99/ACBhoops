import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerDiv">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="headerLink">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="headerDiv">
      <Link to="/players/" className="headerLink">
        Players
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
