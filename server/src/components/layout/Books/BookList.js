import React from 'react'
import BookCard from './BookCard'
const BookList = (props) => {
    return (
        <div className="row">
            {
                props.books.map((book, i) => {
                    return (
                        <BookCard 
                            key = {i}
                            imageProp = {book.volumeInfo.imageLinks.thumbnail}
                            titleProp = {book.volumeInfo.title}
                            authorProp = {book.volumeInfo.authors}
                            publishedDateProp = {book.volumeInfo.publishedDate}

                        />
                    )
                })
            }
        </div>
        
    )
}

export default BookList
