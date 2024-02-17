import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import BootstrapNavbar from "react-bootstrap/Navbar";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function CustomNavbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <BootstrapNavbar className="bg-body-tertiary" expand="lg">
        <Container>
          <BootstrapNavbar.Brand className="pl-3 ">
           <h5 className="Shopping-Cards-text" ><ShoppingCartCheckoutIcon style={{color:"#000"}}/> Navbar with Shopping-Cards</h5> 
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <h5>Home</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cards">
                  <h5>Cards</h5>
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <h5 style={{color:"blue"}}>Cards Item: {items.length}</h5>
                </span>
              </li>
            </ul>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
}
