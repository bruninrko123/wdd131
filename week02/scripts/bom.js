
const input = querySelector("favchap");

const button = querySelector("button");

const list = querySelector("list");


const li = document.createElement("li");

const deleteButton = document.createElement("button");


//puttint the input into the li element
li.textContent = input.value;


deleteButton.textContent = "❌";


li.appendChild(deleteButton);

list.appendChild(li);

