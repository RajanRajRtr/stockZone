import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const NavBar = () => {
  const { cartList } = useSelector((state) => state.cart);
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  // fixed Header
  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);
  // useEffect(()=> {
  //   if(CartItem.length ===0) {
  //     const storedCart = localStorage.getItem("cartItem");
  //     setCartItem(JSON.parse(storedCart));
  //   }
  // },[])
  return (
    <>
      <div className="TOPbar p-2">
        <span>
          <a>
            {" "}
            <FaPhoneAlt size={20} /> 8618995465
          </a>
          &nbsp; &nbsp; &nbsp;&nbsp;
          <a>
            <IoIosMail size={30} />
            info@stockzone.co.in{" "}
          </a>
        </span>
      </div>
      <Navbar
        fixed="top"
        expand="md"
        className={isFixed ? "navbar fixed" : "navbar"}
        // className={isFixed ? "navbar fixed" : "navbar"}
      >
        <Container className="navbar-container">
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <ion-icon name="bag"></ion-icon>
            <h1 className="logo">StockZone</h1>
          </Navbar.Brand>
          {/* Media cart and toggle */}
          <div className="d-flex">
            <div className="media-cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="nav-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                aria-label="Go to Cart Page"
                to="/cart"
                className="cart"
                data-num={cartList.length}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="nav-icon"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </Link>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => {
                setExpand(expand ? false : "expanded");
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            {/* className={isFixed ? "d-none" : "justify-content-end flex-grow-1 pe-3"} */}
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item>
                <Link
                  aria-label="Go to Home Page"
                  // className="navbar-link"
                  className={isFixed ? "d-none" : "navbar-link"}
                  to="/"
                  onClick={() => setExpand(false)}
                >
                  <span className="nav-link-label">Home</span>
                </Link>
              </Nav.Item>
              <Dropdown
                as={Nav.Item}
                className={isFixed ? "d-none" : "navbar-link"}
              >
                <Dropdown.Toggle
                  as={Link}
                  className={isFixed ? "d-none" : "navbar-link"}
                >
                  <span className="nav-link-label">Services</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/TrainingServices">
                    Training Services
                  </Dropdown.Item>
                  {/* <Dropdown.Item as={Link} to="/TradingServices">
            Trading Services
          </Dropdown.Item> */}
                  <Dropdown.Item as={Link} to="/IPO_Services">
                    Per IPO Shares
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item>
                <Link
                  aria-label="Go to Shop Page"
                  // className="navbar-link"
                  className={isFixed ? "d-none" : "navbar-link"}
                  to="/AboutUs"
                  onClick={() => setExpand(false)}
                >
                  <span className="nav-link-label">About Us</span>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  aria-label="Go to Shop Page"
                  className={isFixed ? "d-none" : "navbar-link"}
                  to="/ContactUs"
                  onClick={() => setExpand(false)}
                >
                  <span className="nav-link-label">Contact Us</span>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  aria-label="Go to Shop Page"
                  className={isFixed ? "d-none" : "navbar-link"}
                  to="/adminlogin"
                  onClick={() => setExpand(false)}
                >
                  <span className="nav-link-label">AdminLogin</span>
                </Link>
              </Nav.Item>

              {/* <Nav.Item>
              <Link
                aria-label="Go to Shop Page"
                className="navbar-link"
                to="/shop"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Shop</span>
              </Link>
            </Nav.Item> */}

              {/* <Nav.Item>
              <Link
                aria-label="Go to Cart Page"
                className="navbar-link"
                to="/cart"
                onClick={() => setExpand(false)}
              >
                <span className="nav-link-label">Cart</span>
              </Link>
            </Nav.Item> */}
              <Nav.Item className="expanded-cart">
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                // className="nav-icon"
                className={isFixed ? "d-none" : "nav-icon"}
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg> */}
                <Link
                  aria-label="Go to Cart Page"
                  to="/cart"
                  className="cart"
                  data-num={cartList.length}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="nav-icon"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
