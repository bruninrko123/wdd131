// Taking care of the form


let tripCards = [
    {
        contactInfo : "356541321",
        date : "31 december",
        price : "R$ 30",
        type : "plane",
    }
]

function cardTemplate(card) {
    return `
    <div> 
    <h2>SP-RJ</h2>
    <p>Contact Info: ${card.contactInfo}<br>
    Date: ${card.date}<br>
    Estimated Price: ${card.price}</p> 
    </div>`
}



function displayCards(cards) {
    const trips = cards.map(cardTemplate);
    
    const div = document.getElementById("cards");


    div.innerHTML = trips.join("");
}


function handleForm(event){

    event.preventDefault();

    const contactInfo = document.querySelector("#contactInfo");

    const tripDate = document.querySelector("#tripDate");

    const estimatedPrice = document.querySelector("#estimatedPrice");

    const contactInfoValue = contactInfo.value;
    const tripDateValue = tripDate.value;
    const estimatedPriceValue = estimatedPrice.value;
    //estimatedPriceValue = estimatedPrice.value;


    // getting data from the raido buttons

    const radioButtons = document.querySelectorAll("#transport");
    let selectedTripType = "";
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedTripType = radioButton.value;
            break;
        }


    }


    console.log(contactInfoValue);
    console.log(tripDateValue);
    console.log(estimatedPriceValue)
    console.log(selectedTripType);
    //console.log(estimatedPriceValue);


    let tripCard = {
        contactInfo : contactInfoValue,
        date : tripDateValue,
        price : estimatedPriceValue,
        type : selectedTripType,
    }

    tripCards.push(tripCard);

    displayCards(tripCards);
    

}




const form = document.querySelector("#offerForm");

form.addEventListener("submit", handleForm);



// const trips = tripCards.map(cardTemplate);
// console.log(trips);
//     let div = document.querySelector("#cards");

    

//     div.innerHTML = trips.join("");