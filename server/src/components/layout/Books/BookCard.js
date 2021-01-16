import React from 'react'

const BookCard = (props) => {
    return (
            <div className="entry-posts two-column masonary-posts row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="entry-post">
                        <div className="entry-thumbnail">
                            <img src={props.imageProp} alt="Image" width="800" height="500"/>
                        </div>
                        <div className="entry-content">
                            <h4 className="title">
                            <a href="blog-details.html">
                                {props.titleProp}
                            </a>
                            </h4>
                            <ul className="post-meta">
                            <li className="date">
                                <a href="#">{props.publishedDateProp}</a>
                            </li>
                            <li className="categories">
                                <a href="#">{props.authorProp}</a>
                            </li>
                            </ul>
                            <a href="blog-details.html" className="read-more">
                            Read More <i className="fas fa-long-arrow-right" />
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
    )
}

export default BookCard
