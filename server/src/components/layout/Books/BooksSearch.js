import React from 'react'


const BooksSearch = (props) => {

    return (
    //   <div>
    //       <form onSubmit={props.searchBook} action="">
    //           <br />
    //           <input id="search" onChange={props.handleSearch} placeholder="Insert your book name" type="text"/>
    //           <button type="button" className="btn btn-primary">Submit</button>
    //       </form>
    //   </div>
    <div>
        <section className="post-details-area">
            <div className="container container-1000">
                <div className="comment-template">
                <h4 className="template-title">Enter you book Name </h4>
                <div className="comment-form">
                    <form onSubmit={props.searchBook} action="">
                    <div className="row">
                        <div className="col-sm-6">
                            <input id="search" onChange={props.handleSearch} placeholder="Insert your book name" type="text"/>
                            <div className="col-12">
                                <button type="submit">Search <i className="far fa-arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>
            {/*====== Post Details End ======*/}
    </div>
    )
}

export default BooksSearch
