
const currentYear = document.querySelector("#currentYear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

const modification = document.lastModified;



currentYear.textContent = `©${today.getFullYear()} | Bruno dos Santos Alves`;

lastModified.textContent = `Last Modification: ${modification}`;