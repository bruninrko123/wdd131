



let reviewCounter = Number(window.localStorage.getItem("NumReviews-ls")) || 0;

reviewCounter++




localStorage.setItem("NumReviews-ls", JSON.stringify(reviewCounter));



const counter = document.querySelector("#counter");

counter.innerHTML = `Number of reviews you submitted: ${reviewCounter}`;