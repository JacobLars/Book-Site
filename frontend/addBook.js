
function addBook(title, author, year, cover, shortDescription, longDescription) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(title);
    var raw = JSON.stringify({
        "title": title,
        "shortDescription": shortDescription,
        "longDescription": longDescription,
        "year": year,
        "cover": cover,
        "author": author
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