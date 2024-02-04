const addButton = document.querySelector(".add-book");
const content = document.querySelector(".content");
const dialog = document.querySelector(".dialog");
const subButton = document.querySelector(".sub");
const removeButton = document.querySelectorAll(".remove")
const bookContainer = document.querySelector(".book-container");
const dialogButton = document.querySelector(".read>button");
const form = document.querySelector("form");
const btn = document.querySelector(".re");

const tit = document.querySelector("#title");
const auth = document.querySelector("#author");
const pag = document.querySelector("#pages");
addListener(dialogButton);

const books = [];
let author;
let pages;
let title;
let status;
function addRemoveListener(btn){

    btn.addEventListener("click", (event) =>{
        event.preventDefault();
        const parent = btn.parentNode;
        const grandparent = parent.parentNode;
        const greateGrandpa = grandparent.parentNode;
        greateGrandpa.remove();
    })
}

//changes the color and text content of the button if clicked.
function addListener(button){
    button.addEventListener("click", (event) => {
        event.preventDefault();
        
        if (button.textContent === "Read"){
            button.textContent = "Not Read";
            button.classList.remove("re");
            button.classList.add("red");
            button.style.backgroundColor = "red";
        }
        else if (button.textContent === "Not Read"){
            button.textContent = "Read";
            button.classList.remove("red");
            button.classList.add("re");
            button.style.backgroundColor = "yellowgreen"
        }
    })
}

addButton.addEventListener("click", () =>{
    //creates a pop up form when the button is clicked
    dialog.showModal();
})
//TO-DO || clean the data when closing the dialog
subButton.addEventListener("click", (event) =>{
    event.preventDefault();
    books.push(new createBook(auth.value, tit.value, pag.value, btn.textContent));
    showBook(books.pop());
    dialog.close();
    form.reset();
    dialogButton.textContent = "Read";
})
//TO-DO || Clear button event listener

//book constructor
function createBook(author, title, pages, status){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

//TO-DO || a function that iterates through each object inside the array of books;
function showBook(books){

    //creates the dom element to be added to the book container
    const book = document.createElement("div");
    book.classList.add("book");

    //this creates the top part of the book, and appends it as a child.
    const top = document.createElement("div");
    top.classList.add("top");
    for (let i = 0; i < 3; i++){
        const threeDiv = makeDiv();
        top.appendChild(threeDiv[i]);
    }
    book.appendChild(top);

    //creates the content of the book eg. the middle part where the general info is.
    const content = document.createElement("div");
    content.classList.add("mid");

    //creates the first container of the content part, holds the information for the author.
    const au = document.createElement("div");
    au.classList.add("au");

    //creates the author content
    const authorTitle = document.createElement("p");
    authorTitle.classList.add("label");
    authorTitle.textContent = "Author: "

    const authorName = document.createElement("p");
    authorName.classList.add("nam");
    authorName.textContent = books.author;

    //appends the author's information to the author container
    au.appendChild(authorTitle);
    au.appendChild(authorName);

    //append the author container to the content container
    content.appendChild(au);
    //creates the second container of the content part, holds the information for the title.
    const ti = document.createElement("div");
    //added au as class for consistent design with the other components
    ti.classList.add("au");
    ti.classList.add("tite");

    const bookTitle = document.createElement("p");
    //added label as a class for consistent design with other components
    bookTitle.classList.add("label");
    bookTitle.classList.add("ti");
    bookTitle.textContent = "Title: "

    const bookName = document.createElement("p");
    bookName.classList.add("nam");
    bookName.classList.add("n-ti");
    bookName.textContent = books.title;

    //appends the title's information to the title container
    ti.appendChild(bookTitle);
    ti.appendChild(bookName);

    //append title container to the content container
    content.appendChild(ti);

    //creates the third container that contains the book page/s information.
    const pa = document.createElement("div");
    // au class for design consitency
    pa.classList.add("au");
    pa.classList.add("page");

    const pageTitle = document.createElement("p");
    //label class for design consistency
    pageTitle.classList.add("label");
    pageTitle.classList.add("pa");
    pageTitle.textContent = "Page: "

    const pageCount = document.createElement("p");
    //nam class for design consistency.
    pageCount.classList.add("nam");
    pageCount.classList.add("n-pa")
    pageCount.textContent = books.pages;

    //appends the page's information to the page container.
    pa.appendChild(pageTitle);
    pa.appendChild(pageCount);

    //append the page container to the content container.
    content.appendChild(pa);

    //creates the 4th container that contains the read status button.
    const bContain = document.createElement("div");
    //au class for design consistency
    bContain.classList.add("au");
    bContain.classList.add("btn");

    const btn = document.createElement("button");
    if (btn.textContent === "Read"){
        btn.classList.add("red");
    }
    else{
        btn.classList.add("re");
    }
    btn.classList.add("btn");
    btn.textContent = books.status;
    //adds event listener to the button.
    addListener(btn);

    //appends btn to the buton container;
    bContain.appendChild(btn);

    //appends the button container to the content;
    content.appendChild(bContain);

    //creates the last container that contains the option to remove the book.
    const rmContain = document.createElement("div");
    rmContain.classList.add("remove");

    const rBtn = document.createElement("button");
    rBtn.classList.add("rm");
    rBtn.textContent = "Remove Book";

    //adds its event listener.
    addRemoveListener(rBtn);

    //adds remove button to the container.
    rmContain.appendChild(rBtn);

    //appends the remove button container to the content container.
    content.appendChild(rmContain);
    
    //appends the middle part / book content to the book container.
    book.appendChild(content);

    //creates the bottom part of the book/footer.
    const bot = document.createElement("div");
    bot.classList.add("bot");
    for (let j = 0; j < 3; j++){
        const tDiv = makeDiv();
        bot.appendChild(tDiv[j]);
    }
    book.appendChild(bot);

    bookContainer.appendChild(book);
}

function makeDiv(){
    const threeDiv = [];

    for (let i = 0; i < 3 ; i++){
        const div = document.createElement("div");
        threeDiv.push(div);
    }
    return threeDiv;
}

//TO-DO || Remove a book listener;