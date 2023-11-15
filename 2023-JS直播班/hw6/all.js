dialogBTN.onclick = function(){
    dialogModel.classList.remove('noDisplay');
    dialogBackdrop.classList.remove('noDisplay');
    window.addEventListener('scroll', noScroll);
}

dialogCloseBTN.onclick = function(){
    dialogModel.classList.add('noDisplay');
    dialogBackdrop.classList.add('noDisplay');
    window.removeEventListener('scroll', noScroll);
    dialogBTN.focus();
}

function noScroll(){
    window.scrollTo(0,0);
}

// --------------------------

let books = ["Harry Potter", "Hello World", "Old Man And Sea"];
let showBook = [...books];

window.onload = function(){
    showBook.forEach(function(book){
        bookList.innerHTML += `<li>${book}</li>`;
    })
}