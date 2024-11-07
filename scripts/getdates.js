
// Getting the year 
const year = document.querySelector("#currentYear");

const today = new Date();

year.innerHTML = `©${today.getFullYear()} | Bruno dos Santos Alves`;


// getting the date and time for last modification

const lastModified = document.querySelector("#lastModified");

const modification = document.lastModified;

lastModified.innerHTML = `Last Modification: ${modification}`;


