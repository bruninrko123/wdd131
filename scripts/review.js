



let reviewCounter = Number(window.localStorage.getItem("NumReviews-ls")) || 0;

reviewCounter++




localStorage.setItem("NumReviews-ls", JSON.stringify(reviewCounter));



