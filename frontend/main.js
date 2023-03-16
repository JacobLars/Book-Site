

fetch('http://localhost:8080/books/get/all')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.log(error));


function renderBooks(data) {

    let placeholder = document.getElementById("all_books");
    let out = "";

    for (let book of data) {
        out += `
        <div>
            <button id="delete_button" href='index.html' onClick="deleteBookById('${book.bookId}');">Delete</button>    
           <h1><a class="book_link" href="#" onClick="renderBookPage('${book.title}');">${book.title}</a></h1>
           <h3><a class="author_link" href="#" onClick="renderBooksByAuthor('${book.author}');">${book.author}</a></h3>
           <img src='${book.cover}'> 
           <p>${book.shortDescription}</p>
           
        </div>
        
     `;
    }
    placeholder.innerHTML = out;


}

function renderBooksByAuthor(authorName) {

    fetch('http://localhost:8080/books/search/author/' + authorName)
        .then(response => response.json())
        .then(data => {
            let placeholder = document.getElementById("all_books");
            let out = "";
            for (let book of data) {
                out += `
            <div>    
               <h1><a id="book_link" href="#" onClick="renderBookPage('${book.title}');">${book.title}</a></h1>
               <h3><a class="author_link" href="#" onClick="renderBooksByAuthor('${book.author}');">${book.author}</a></h3>
               <img src='${book.cover}'> 
               <p>${book.shortDescription}</p>
               
            </div>
            
         `;
            }

            placeholder.innerHTML = out;
        })
        .catch(error => console.log(error));

}


function renderBookPage(bookTitle) {
    fetch('http://localhost:8080/books/search/title/' + bookTitle)
        .then(response => response.json())
        .then(data => {
            let placeholder = document.getElementById("all_books");
            let out = "";
            console.log(bookTitle);
            console.log(data);

            for (let book of data) {
                out += `
            <div id="book_div">    
               <h1>${book.title}</h1>
               <h3><a class="author_link" href="#" onClick="renderBooksByAuthor('${book.author}');">${book.author}</a></h3>
               <img src='${book.cover}'>
               <p id="year">Published: ${book.year}</p>
               <h3 id="book_description_header">Description</h3>
               <p id="book_description">${book.longDescription}</p>
               
            </div>
            
         `;
            }

            placeholder.innerHTML = out;
        })
        .catch(error => console.log(error));

}



function renderBookBySearch(bookTitle) {

    fetch('http://localhost:8080/books/search/title/' + bookTitle)
        .then(response => response.json())
        .then(data => {
            let placeholder = document.getElementById("all_books");
            let out = "";
            for (let book of data) {
                out += `
            <div>    
               <h1><a id="book_link" href="#" onClick="renderBookPage('${book.title}');">${book.title}</a></h1>
               <h3><a class="author_link" href="#" onClick="renderBooksByAuthor('${book.author}');">${book.author}</a></h3>
               <img src='${book.cover}'> 
               <p>${book.shortDescription}</p>
               
            </div>
            
         `;
            }

            placeholder.innerHTML = out;
        })
        .catch(error => console.log(error));

}


function deleteBookById(bookId) {
    console.log(bookId);

    var requestOptions = {
        method: 'POST',
    };

    fetch('http://localhost:8080/books/delete/' + bookId, requestOptions)
        .catch(error => console.log(error));


    location.reload(true);

}

function renderAddBookForm() {
    let placeholder = document.getElementById("all_books");
    let output = "";
    let search_form = document.getElementById("search_form");

    if (search_form.style.display === "none") {
        search_form.style.display = "block";
    } else {
        search_form.style.display = "none";
    }

    output += `
            <form id="add_book_form" action="index.html">    
            <label>Book title:</label> <input type="text" id="the_book_title" name="book_title"><br>
            <label>Author:</label> <input type="text" id="book_author" name="book_author"><br>  
            <label>Publish year:</label> <input type="text" id="book_year" name="book_year"><br> 
            <label>Cover url:</label> <input type="text" id="book_cover" name="book_cover"><br>
            <label>Short description:</label> <input type="text" id="s_description" name="s_description"><br>
            <label>Long description</label> <input type="text" id="l_description" name="l_description"><br>
            <input id="add_book_button" type="submit" value="Submit" onclick="addBook(document.getElementById('the_book_title').value, document.getElementById('book_author').value, document.getElementById('book_year').value, document.getElementById('book_cover').value, document.getElementById('s_description').value,document.getElementById('l_description').value)">
            </form>
            
         `;

    placeholder.innerHTML = output;


    console.log("Form is printed");

}



function addBook(title, author, year, cover, shortDescription, longDescription) {
    console.log('title:' + author);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "title": title,
        "author": author,
        "year": year,
        "cover": cover,
        "shortDescription": shortDescription,
        "longDescription": longDescription,
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/books/add", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}