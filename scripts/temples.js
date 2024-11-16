const year = document.querySelector("#currentYear");

const today = new Date();

year.textContent = `©${today.getFullYear()} | Bruno dos Santos Alves`;



const lastModified = document.querySelector("#lastModified");



lastModified.textContent = `Last modification: ${document.lastModified}`;



const hambButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

hambButton.addEventListener("click", () => {
    hambButton.classList.toggle("open");
    
    navigation.classList.toggle("open");
    
});