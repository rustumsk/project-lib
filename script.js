const addButton = document.querySelector(".add-book");
const content = document.querySelector(".content");
const dialog = document.querySelector(".dialog");
const readButton = document.querySelector(".re");
const subButton = document.querySelector(".sub");

const tit = document.querySelector("#title");
const auth = document.querySelector("#author");
const pag = document.querySelector("#pages");

const books = [];
let author;
let pages;
let title;
let status;


//changes the color and text content of the button if clicked.
readButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (readButton.textContent === "Read"){
        readButton.textContent = "Not Read";
        readButton.classList.remove("re");
        readButton.style.backgroundColor = "red";
        readButton.classList.add("red");
    }
    else{
        readButton.textContent = "Read";
        readButton.classList.add("red");
        readButton.classList.remove("re");
        readButton.style.backgroundColor = "yellowgreen"
    }
})
addButton.addEventListener("click", () =>{
    //creates a pop up form when the button is clicked
    dialog.showModal();
})
//TO-DO || clean the data when closing the dialog
subButton.addEventListener("click", (event) =>{
    event.preventDefault();
    books.push(new createBook(auth.value, tit.value, pag.value, readButton.textContent));
    dialog.close();
})
//TO-DO || Clear button event listener


//TO-DO || a function with constructor that creates and stores book objects into an array
function createBook(author, title, pages, status){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

//TO-DO || a function that iterates through each object inside the array of books;
function showBook(){
    console.log(books);
}

//TO-DO || Remove a book listener;