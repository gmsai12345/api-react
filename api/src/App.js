import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books?pageSize=30"
    ); //  the url having dR

    setBooks(response.data);
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}> // fetch data
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books"> // how to display the data 
        {books &&
          books.map((book, index) => { // mapping so that it can be converted from array to each element which you want to be displayed in the output
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", "); // joining authors

            return (
              <div className="book" key={index}> // displaying index from 1 to 8
                <h3>Book {index + 1}</h3> 
                <h2>{book.name}</h2> 
// from name element in array

                <div className="details"> // details of the book such as author,pages,country,day it was published in small chart like format in webpage
                  <p>{authors}</p>
                  <p>{book.numberOfPages} pages</p>
                  <p>🏘{book.country}</p>
                  <p>{cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
