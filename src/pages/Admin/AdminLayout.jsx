import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar2 from "../../components/Navbar/Navbar2";
// import Footer from "../components/Footer/Footer";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Admin.css";
import { Button } from "react-bootstrap";

const AdminLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => setShowSidebar(!showSidebar);

  const options = [
    {
      name: "Disable backdrop",
      scroll: false,
      backdrop: false,
    },
  ];

  function OffCanvasExample({ name, ...props }) {
    const handleClose = () => setShowSidebar(false);

    return (
      <>
        <Offcanvas
          show={showSidebar}
          {...props}
          style={{ width: "200px", textAlign: "center" }}
        >
          <Offcanvas.Header
            style={{ backgroundColor: "#0b5ed7", color: "white" }}
          >
            <Offcanvas.Title>StockZone</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li className="offcanvas_li py-3">
                <Link to="/admin/Orders">View Orders</Link>
              </li>
              <li className="offcanvas_li py-2">
                <Link to="/admin/viewProduct">Product</Link>
              </li>

              {/* <li className="pb-3"><Link to="/admin/viewProduct">News</Link></li> */}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <>
      <NavBar2 toggleSidebar={handleToggleSidebar} show={showSidebar} />
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
      <main>{children}</main>
      {/* {!isAdminRoute && <Footer />} */}
    </>
  );
};

export default AdminLayout;
