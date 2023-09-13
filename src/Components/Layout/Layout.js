import React from "react";
import Date from "../Date/Date";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-first-cont">
        <div>
          <Date />
        </div>
      </div>
      <div className="layout-main-container">{children}</div>
      <div className="layout-cont-4">
        <div className="quote">
          <h3>
            a place where <span>growth matter</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Layout;
