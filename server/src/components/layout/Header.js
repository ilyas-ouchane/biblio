import React from "react";


export default function Header() {

  return (
    <header className="sticky-header">
        <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="site-logo">
                    <a href="/"><img src="assets/img/logo.png" alt="Genial" width="150" height="50" /></a>
                    </div>
                    <div className="header-right">
                    <div className="search-area">
                        <a href="javascript:void(0)" className="search-btn"><i className="fas fa-search" /></a>
                        <div className="search-form">
                        <a href="#" className="search-close"><i className="fal fa-times" /></a>
                        <form action="#">
                            <input type="search" placeholder="Type here to search" />
                        </form>
                        <div className="search-overly" />
                        </div>
                    </div>
                    <div className="shoping-cart">
                        <a href="cart.html" className="shoping-cart-btn">
                        <i className="fas fa-shopping-cart" />
                        <span className="count">2</span>
                        </a>
                    </div>
                    <div className="offcanvas-panel">
                        <a href="javascript:void(0)" className="panel-btn">
                        <span>
                            <span />
                            <span />
                            <span />
                        </span>
                        </a>
                        <div className="panel-overly" />
                        <div className="offcanvas-items">
                        {/* Navbar Toggler */}
                        <a href="javascript:void(0)" className="panel-close">
                            Back <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="offcanvas-menu">
                            <li>
                            <a href="index.html">Home</a>
                            <ul className="submenu">
                                <li><a href="index.html">Home One</a></li>
                                <li><a href="index-2.html">Home Two</a></li>
                                <li><a href="index-3.html">Home Three</a></li>
                                <li><a href="index-4.html">Home Four</a></li>
                            </ul>
                            </li>
                            <li><a href="blog-details.html">Blog Single</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="photo-stories.html">Photo Stories</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="404.html">404</a></li>
                            <li>
                            <a href="shop.html">Shop</a>
                            <ul className="submenu">
                                <li><a href="product-details.html">Shop Details -A</a></li>
                                <li><a href="product-details-2.html">Shop Details -B</a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="myaccount.html">My account</a></li>
                            </ul>
                            </li>
                        </ul>
                        <div className="social-icons">
                            <ul>
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#"><i className="fab fa-youtube" /></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </header>
  );
}
