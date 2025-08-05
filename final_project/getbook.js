const axios = require('axios');

function getBooks() {
    return axios.get('http://localhost:5000/');
}

function getBookDetails(isbn) {
    return axios.get(`http://localhost:5000/books/${isbn}`);
}

function getBookDetailsByAuthor(author) {
    return axios.get(`http://localhost:5000/books/author/${encodeURIComponent(author)}`);
}
function getBookDetailsByTitle(title) {
    return axios.get(`http://localhost:5000/books/title/${encodeURIComponent(title)}`);
}

console.log("Before calling getBooks");

getBooks()
    .then(response => {
        console.log("Books fetched successfully:");
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching books: ", error.message);
    });

console.log("After calling getBooks");

const testISBN = '4'; // actual isbn
console.log("\nBefore calling getBookDetails");

getBookDetails(testISBN)
    .then(response => {
        console.log(`Book details for ISBN ${testISBN} fetched successfully:`);
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching book details: ', error.message);
    });

console.log("After calling getBookDetails");

const testAuthor = 'Chinua Achebe'; // test author
console.log("\nBefore calling getBookDetailsByAuthor");

getBookDetailsByAuthor(testAuthor)
    .then(response => {
        console.log(`Book details for author "${testAuthor}":`);
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching books by author: ", error.message);
    });

console.log("After calling getBookDetailsByAuthor");

const testTitle = "Things Fall Apart" // test title
console.log("\nBefore calling getBookDetailsByTitle");

getBookDetailsByTitle(testTitle)
    .then(response => {
        console.log('Book details for title "${testTitle}":');
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching book details by title: ", error.message);
  });

console.log("After calling BookDetailsByTitle");