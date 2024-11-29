//  arrays.js
const steps = ["one", "two", "three"];

const listTemplate = (step) => {
  return `<li>${step}</li>`
}



const li = document.createElement("li");

li.textContent = "testing";



let stepsHtml = steps.map(listTemplate);



const ul = document.querySelector("#myList");


     
ul.innerHTML = stepsHtml.join("");


function letterintoGPA(letter){

  if (letter == "A"){
    letter = 4;
    return letter;
  }

  if (letter == "B"){
    letter = 3;
    return letter;
  }

}

let letterGrades = ["A", "B", "A"];


let gpaGrades = letterGrades.map(letterintoGPA);


console.log(gpaGrades);


const gpa = gpaGrades.reduce(function(total, item) {
  return total + item;
});


console.log(gpa);




let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let smallFruits = fruits.filter(function(fruit) {
  return fruit.length < 6;
});


console.log(smallFruits);





let numbers = [12, 34, 21, 54];

const luckyNumber = 21;

const index = numbers.indexOf(luckyNumber,0);

console.log(index);