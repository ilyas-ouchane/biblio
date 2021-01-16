import React, { Component } from 'react'
// import request from 'superagent'
import BooksSearch from './BooksSearch'
import BookList from './BookList'
import axios from 'axios'

// const api = axios.create({
//     baseURL: "https://www.googleapis.com/books/v1/volumes?q=richdadpoordad"
// }

export class BooksPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books : [],
      searchField: ''
    }
  }

  //Request to google book api
  searchBook = (e) => {
    e.preventDefault()
    const val = this.state.searchField
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q="+val)
    .then((data) => {
      console.log(data.data.items)
      this.setState({books: [...data.data.items]})
    })
  }

  //Set the state whenever we type in the input box
  handleSearch = (e) => {
    this.setState({
      // changement instantané de la valeur de searchField  
      searchField: e.target.value,
    })
  }
  
  render() {
    return (
      <div>
        <BooksSearch searchBook={this.searchBook} handleSearch={this.handleSearch}/>
        <BookList books={this.state.books}/>
      </div>
    )
  }
}

export default BooksPage
