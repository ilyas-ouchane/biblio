import React from 'react'
import BooksPage from './Books/BooksPage'

export default function Home() {
    return (
      <div>
        {/*====== Banner Area Start ======*/}
        <section className="banner-section">
            <div className="banner-slider">
            <div className="sinlge-banner">
                <div className="banner-wrapper">
                <div className="banner-bg" style={{backgroundImage: 'url(assets/img/banner/01.jpg)'}} />
                <div className="banner-content" data-animation="fadeInUp" data-delay="0.3s">
                    <h3 className="title" data-animation="fadeInUp" data-delay="0.6s">
                    <a href="/">
                        Hello Bibliophilists
                    </a>
                    </h3>
                    <ul className="meta" data-animation="fadeInUp" data-delay="0.8s">
                    <li><a href="#">By - ELADNANI Ahmed Reda</a></li>
                    <li><a href="#">OUCHANE Ilyas</a></li>
                    </ul>
                    <p data-animation="fadeInUp" data-delay="1s">
                    Bibliophilists is the best plateform to discover, read, purchase, Share 
                    your books hobbie. 
                    </p>
                    <a href="blog-details.html" className="read-more" data-animation="fadeInUp" data-delay="1.2s">
                    Discover more More <i className="fas fa-long-arrow-right" />
                    </a>
                </div>
                </div>
            </div>
            </div>
            <div className="banner-nav" />
        </section>
        {/*====== Banner Area End ======*/}
        {/*====== Post Area Start ======*/}
        <section className="post-area with-sidebar" id="postWarpperLoaded">
            <div className="container container-1250">
            <div className="post-area-inner">
                <BooksPage />
                <div className="primary-sidebar clearfix">
                <div className="sidebar-masonary row justify-content-center">
                    <div className="col-lg-12 col-md-6 col-sm-8 widget author-widget">
                    <div className="author-img">
                        <img src="assets/img/sidebar/author.jpg" alt="Post-Author" />
                    </div>
                    <h5 className="widget-title">I am a Bloger</h5>
                    <p>
                        When it comes to creating is a website for your business, an attractive design will only
                        get you far,...
                    </p>
                    <div className="author-signature">
                        <img src="assets/img/sidebar/author-signature.png" alt="Signature" />
                    </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-8 widget categories-widget">
                    <h5 className="widget-title">Categoriesr</h5>
                    <div className="categories">
                        <div className="categorie" style={{backgroundImage: 'url(assets/img/sidebar/cat/01.jpg)'}}>
                        <a href="#">
                            Business
                        </a>
                        </div>
                        <div className="categorie" style={{backgroundImage: 'url(assets/img/sidebar/cat/02.jpg)'}}>
                        <a href="#">
                            Fashion
                        </a>
                        </div>
                        <div className="categorie" style={{backgroundImage: 'url(assets/img/sidebar/cat/03.jpg)'}}>
                        <a href="#">
                            Artistic
                        </a>
                        </div>
                        <div className="categorie" style={{backgroundImage: 'url(assets/img/sidebar/cat/04.jpg)'}}>
                        <a href="#">
                            Media
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-8 widget social-widget">
                    <h5 className="widget-title">Subscribe</h5>
                    <div className="social-links">
                        <a href="#">
                        <i className="fab fa-facebook-f" />Facebook
                        </a>
                        <a href="#">
                        <i className="fab fa-twitter" />Twitter
                        </a>
                        <a href="#">
                        <i className="fab fa-instagram" />Instagram
                        </a>
                        <a href="#">
                        <i className="fab fa-youtube" />YouTube
                        </a>
                        <a href="#">
                        <i className="fab fa-pinterest-p" />Pinterest
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-8 widget popular-articles">
                    <h5 className="widget-title">Popular Articles</h5>
                    <div className="articles">
                        <div className="article">
                        <div className="thumb">
                            <img src="assets/img/sidebar/articles/01.jpg" alt="Image" />
                        </div>
                        <div className="desc">
                            <h6><a href="blog-details.html">Best Wordpress Theme of 2018</a></h6>
                            <span className="post-date">Audust 23, 2015</span>
                        </div>
                        </div>
                        <div className="article">
                        <div className="thumb">
                            <img src="assets/img/sidebar/articles/02.jpg" alt="Image" />
                        </div>
                        <div className="desc">
                            <h6><a href="blog-details.html">Dating While Studying Abroad—Maximize Fun
                                Minimize Heartbreak</a></h6>
                            <span className="post-date">Audust 23, 2015</span>
                        </div>
                        </div>
                        <div className="article">
                        <div className="thumb">
                            <img src="assets/img/sidebar/articles/03.jpg" alt="Image" />
                        </div>
                        <div className="desc">
                            <h6><a href="blog-details.html">Nature Photography Best Place Focus</a></h6>
                            <span className="post-date">Audust 23, 2015</span>
                        </div>
                        </div>
                        <div className="article">
                        <div className="thumb">
                            <img src="assets/img/sidebar/articles/04.jpg" alt="Image" />
                        </div>
                        <div className="desc">
                            <h6><a href="blog-details.html">Best Wordpress Theme of 2018</a></h6>
                            <span className="post-date">Audust 23, 2015</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-8 widget ad-widget">
                    <img src="assets/img/sidebar/ad.jpg" alt="Image" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*====== Post Area End ======*/}
        {/*====== Instagram Area Start ======*/}
        <section className="instagram-section">
            <div className="container-fluid p-0">
            <h5 className="instagram-title">
                Follow Us <span className="instagram-icon"><i className="fab fa-instagram" /></span> Instagram
            </h5>
            <div className="instagram-images">
                <div className="image">
                <img src="assets/img/instagram/01.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/02.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/03.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/04.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/05.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/06.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/07.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/01.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/02.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/03.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/04.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/05.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/06.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
                <div className="image">
                <img src="assets/img/instagram/07.jpg" alt="Instagram-image" />
                <a className="instagram-link" href="#"><i className="fab fa-instagram" /></a>
                </div>
            </div>
            </div>
        </section>
        {/*====== Instagram Area End ======*/}
      </div>
    )
}
