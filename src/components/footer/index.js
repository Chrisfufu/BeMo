/**
 * Footer component.
 */
import React from "react";
import { Layout, Icon } from "antd";
import "./style.less";
const { Footer } = Layout;

// return a footer object, with a link "contact us"
// and a facebook icon.
const footer = (style1, style2) => {
  return (
    <Footer
      className="layout-footer"
      style={{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <div className="layout-footer-content" style={style2}>
        <div className="footerContact">
          <a
            href="./customerServices"
            style={{
              display: 'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            ©2013-2016 BeMo Academic Consulting Inc. All rights reserved.
          </a>
          <br></br>
            <a
               href={"mailto:info@bemoacademicconsulting.com" }
              style={{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
            >
              Contact Us
            </a>
          <div
            style={{
              display: 'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <Icon
              type="twitter-square"
              theme="filled"
              style={{ fontSize: "1.8rem", color: "#000000", margin: "0.5rem" }}
            />
            <Icon
              type="facebook"
              style={{ fontSize: "1.8rem", color: "#000000", margin: "0.5rem" }}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

// return a funciton called appfooter it has 2 objects,
// one is "contact us", the second one is "facebook"
function AppFooter() {
  return footer({ minHeight: "4rem" }, { height: "-2rem", margin:"auto" });
}
export default AppFooter;
