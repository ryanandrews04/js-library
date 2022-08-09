let container = document.querySelector('.container');
let bookContainer = document.createElement('div');
bookContainer.classList.add('book-container');
container.appendChild(bookContainer);
let formPopup = document.createElement('div');
formPopup.classList.add('form-popup');
formPopup.style.display = 'none';
container.appendChild(formPopup);

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (read){
        this.read = "Read";
    } else {
        this.read = "Not read yet";
    }
    // let readInfo = null

    // if(read){
    //     readInfo = "read"
    // } else {
    //     readInfo = "not read yet"
    // }

    // this.info = function(){
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${readInfo}`
    // }
}

Book.prototype.info = function() {
    let readInfo = null;

    if(this.read){
        readInfo = "read";
    } else {
        readInfo = "not read yet";
    }

    return `${this.title} by ${this.author}, ${this.pages} pages, ${readInfo}`;
    
}

let book1 = new Book('Stone', 'Rowling', 300, true);
let book2 = new Book('Chamber', 'Rowler', 325, true);
let book3 = new Book('Moby Dick', 'John C. Reilly', 598, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

let addBookButton = document.createElement('button');
addBookButton.classList.add('add-book-btn');
addBookButton.innerText = 'Add Book';
container.appendChild(addBookButton);

let form = document.createElement('form');
form.classList.add('form')
form.setAttribute('method', 'post');
form.setAttribute("action", "");

let title = document.createElement('input');
title.setAttribute('type', 'text');
title.setAttribute('name', 'title');
title.setAttribute('placeholder', 'Title');
title.required = true;


let author = document.createElement('input');
author.setAttribute('type', 'text');
author.setAttribute('name', 'author');
author.setAttribute('placeholder', 'Author');
author.required = true;

let pages = document.createElement('input');
pages.setAttribute('type', 'number');
pages.setAttribute('name', 'Pages');
pages.setAttribute('placeholder', 'Pages');
pages.required = true;

let readLabel = document.createElement('label');
readLabel.setAttribute('for', 'read');
readLabel.innerText = `I've read this book`;

let read = document.createElement('input');
read.setAttribute('type', 'checkbox');
read.setAttribute('name', 'read');
read.setAttribute('id', 'read');

let submit = document.createElement('button');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Add');
submit.innerText = 'Add Book';

submit.addEventListener('click', function(e){
    e.preventDefault();
    if (title.value && author.value && pages.value){
        let readValue = false;
        if (read.checked){
            readValue = true;
        }
        console.log(readValue);
    let newBook = new Book(title.value, author.value, pages.value, readValue);
    myLibrary.push(newBook);
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookContainer.appendChild(bookCard);
    for (const property in newBook) {
        if(property !== 'info'){
        let bookProp = document.createElement('p')
        bookProp.innerText = `${newBook[property]}`
        bookCard.appendChild(bookProp);
        }
    }
    title.value = "";
    author.value = "";
    pages.value = "";
    formPopup.style.display = 'none';
} else {
    alert('Please fill out the form');
}
})

form.appendChild(title);
form.appendChild(author);
form.appendChild(pages);
form.appendChild(readLabel);
form.appendChild(read);
form.appendChild(submit);

formPopup.appendChild(form);


addBookButton.addEventListener('click', function() {
    var form = document.querySelector('.form-popup');
  if (form.style.display === "none") {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }

})

function displayBooks(){
    myLibrary.forEach(book => {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookContainer.appendChild(bookCard);
        for (const property in book) {
            if(property !== 'info'){
            let bookProp = document.createElement('p')
            bookProp.innerText = `${book[property]}`
            bookCard.appendChild(bookProp);
            }
        }
    });
}

displayBooks();


