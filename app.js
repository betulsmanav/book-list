const title = document.querySelector("#title");
const author = document.querySelector("#author");
const date = document.querySelector("#date");
const button = document.querySelector("#btn");
const bookList = document.querySelector("#book-list");
const form = document.querySelector("form");

const createTask = (title, author, date) => {
  return `
        <tr>
          <td>${title}</td>
          <td>${author}</td>
          <td>${date}</td>
        </tr>`
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value != "" && author.value != "" && date.value != "") {
    bookList.innerHTML += createTask(title.value, author.value, date.value);
    form.reset();
  
    
  } else {
    alert("bos ");
  }
});