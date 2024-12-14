// Taking care of the form


let tripCards = [
    {
      contactInfo: "988654477",
      date: "December, 31",
      price: "R$ 60",
      type: "car",
      origin: "São Paulo",
      destination: "Rio de Janeiro",
      icon: "🚗"
    },
    {
      contactInfo: "988654270",
      date: "January, 2",
      price: "R$ 500",
      type: "plane",
      origin: "São Paulo",
      destination: "Belo Horizonte",
      icon: "✈️"
    },
    {
      contactInfo: "978614272",
      date: "December, 17",
      price: "R$ 50",
      type: "bus",
      origin: "São Paulo",
      destination: "Campinas",
      icon: "🚌"
    },
    {
      contactInfo: "912345678",
      date: "March, 10",
      price: "R$ 120",
      type: "car",
      origin: "Rio de Janeiro",
      destination: "São Paulo",
      icon: "🚗"
    },
    {
      contactInfo: "998765432",
      date: "April, 5",
      price: "R$ 200",
      type: "plane",
      origin: "Belo Horizonte",
      destination: "São Paulo",
      icon: "✈️"
    },
    {
      contactInfo: "932109876",
      date: "May, 25",
      price: "R$ 70",
      type: "bus",
      origin: "Campinas",
      destination: "São Paulo",
      icon: "🚌"
    },
    {
      contactInfo: "912345678",
      date: "July, 10",
      price: "R$ 250",
      type: "car",
      origin: "Rio de Janeiro",
      destination: "Santos",
      icon: "🚗"
    },
    {
      contactInfo: "998765432",
      date: "August, 5",
      price: "R$ 300",
      type: "plane",
      origin: "São Paulo",
      destination: "Florianópolis",
      icon: "✈️"
    },
    {
      contactInfo: "987654321",
      date: "September, 20",
      price: "R$ 100",
      type: "car",
      origin: "Campinas",
      destination: "São Paulo",
      icon: "🚗"
    },
    {
      contactInfo: "912345678",
      date: "October, 15",
      price: "R$ 180",
      type: "bus",
      origin: "São Paulo",
      destination: "Curitiba",
      icon: "🚌"
    },
    // Add 10 more trip objects here, following the same structure:
    {
      contactInfo: "123456789",
      date: "November, 10",
      price: "R$ 150",
      type: "car",
      origin: "São Paulo",
      destination: "Santos",
      icon: "🚗"
    },
    {
      contactInfo: "987654321",
      date: "December, 25",
      price: "R$ 220",
      type: "plane",
      origin: "São Paulo",
      destination: "Porto Alegre",
      icon: "✈️"
    },
    {
      contactInfo: "123456789",
      date: "January, 15",
      price: "R$ 80",
      type: "bus",
      origin: "Campinas",
      destination: "São Paulo",
      icon: "🚌"
    },
    {
      contactInfo: "987654321",
      date: "February, 20",
      price: "R$ 130",
      type: "car",
      origin: "Rio de Janeiro",
      destination: "Belo Horizonte",
      icon: "🚗"
    },
    {
      contactInfo: "123456789",
      date: "March, 25",
      price: "R$ 250",
      type: "plane",
      origin: "São Paulo",
      destination: "Recife",
      icon: "✈️"
    },
    {
      contactInfo: "987654321",
      date: "April, 10",
      price: "R$ 90",
      type: "bus",
      origin: "Curitiba",
      destination: "São Paulo",
      icon: "🚌"
    },
    {
      contactInfo: "123456789",
      date: "May, 15",
      price: "R$ 170",
      type: "car",
      origin: "Santos",
      destination: "São Paulo",
      icon: "🚗"
    },
    {
      contactInfo: "987654321",
      date: "June, 20",
      price: "R$ 300",
      type: "plane",
      origin: "São Paulo",
      destination: "Salvador",
      icon: "✈️"
    },
    {
      contactInfo: "123456789",
      date: "July, 25",
      price: "R$ 110",
      type: "bus",
      origin: "Campinas",
      destination: "Rio de Janeiro",
      icon: "🚌"
    },
    {
      contactInfo: "987654321",
      date: "August, 10",
      price: "R$ 190",
      type: "car",
      origin: "Belo Horizonte",
      destination: "São Paulo",
      icon: "🚗"
    }
  ];

const storageArray = localStorage.getItem("tripCards");

if (storageArray){

  console.log(storageArray);
  tripCards = JSON.parse(storageArray);
}
else{
  let tripCards = [
    {
      contactInfo: "988654477",
      date: "December, 31",
      price: "R$ 60",
      type: "car",
      origin: "São Paulo",
      destination: "Rio de Janeiro",
      icon: "🚗"
    },
    {
      contactInfo: "988654270",
      date: "January, 2",
      price: "R$ 500",
      type: "plane",
      origin: "São Paulo",
      destination: "Belo Horizonte",
      icon: "✈️"
    },
    {
      contactInfo: "978614272",
      date: "December, 17",
      price: "R$ 50",
      type: "bus",
      origin: "São Paulo",
      destination: "Campinas",
      icon: "🚌"
    },
    {
      contactInfo: "912345678",
      date: "March, 10",
      price: "R$ 120",
      type: "car",
      origin: "Rio de Janeiro",
      destination: "São Paulo",
      icon: "🚗"
    },
    {
      contactInfo: "998765432",
      date: "April, 5",
      price: "R$ 200",
      type: "plane",
      origin: "Belo Horizonte",
      destination: "São Paulo",
      icon: "✈️"
    },
    {
      contactInfo: "932109876",
      date: "May, 25",
      price: "R$ 70",
      type: "bus",
      origin: "Campinas",
      destination: "São Paulo",
      icon: "🚌"
    },
    {
      contactInfo: "912345678",
      date: "July, 10",
      price: "R$ 250",
      type: "car",
      origin: "Rio de Janeiro",
      destination: "Santos",
      icon: "🚗"
    },
    {
      contactInfo: "998765432",
      date: "August, 5",
      price: "R$ 300",
      type: "plane",
      origin: "São Paulo",
      destination: "Florianópolis",
      icon: "✈️"
    },
    {
      contactInfo: "987654321",
      date: "September, 20",
      price: "R$ 100",
      type: "car",
      origin: "Campinas",
      destination: "São Paulo",
      icon: "🚗"
    },
    {
      contactInfo: "912345678",
      date: "October, 15",
      price: "R$ 180",
      type: "bus",
      origin: "São Paulo",
      destination: "Curitiba",
      icon: "🚌"
    },
    // Add 10 more trip objects here, following the same structure:
    {
      contactInfo: "123456789",
      date: "November, 10",
      price: "R$ 150",
      type: "car",
      origin: "São Paulo",
      destination: "Santos",
      icon: "🚗"
    },
    {
      contactInfo: "987654321",
      date: "December, 25",
      price: "R$ 220",
      type: "plane",
      origin: "São Paulo",
      destination: "Porto Alegre",
      icon: "✈️"
    },
    {
      contactInfo: "123456789",
      date: "January, 15",
      price: "R$ 80",
      type: "bus",
      origin: "Campinas",
      destination: "São Paulo",
      icon: "🚌"
    },
    {
      contactInfo: "987654321",
      date: "February, 20",
      price: "R$ 130",
      type: "car",
      origin: "Rio de Janeiro",
      destination: "Belo Horizonte",
      icon: "🚗"
    },
    {
      contactInfo: "123456789",
      date: "March, 25",
      price: "R$ 250",
      type: "plane",
      origin: "São Paulo",
      destination: "Recife",
      icon: "✈️"
    },
    {
      contactInfo: "987654321",
      date: "April, 10",
      price: "R$ 90",
      type: "bus",
      origin: "Curitiba",
      destination: "São Paulo",
      icon: "🚌"
    },
    {
      contactInfo: "123456789",
      date: "May, 15",
      price: "R$ 170",
      type: "car",
      origin: "Santos",
      destination: "São Paulo",
      icon: "🚗"
    },
    {
      contactInfo: "987654321",
      date: "June, 20",
      price: "R$ 300",
      type: "plane",
      origin: "São Paulo",
      destination: "Salvador",
      icon: "✈️"
    },
    {
      contactInfo: "123456789",
      date: "July, 25",
      price: "R$ 110",
      type: "bus",
      origin: "Campinas",
      destination: "Rio de Janeiro",
      icon: "🚌"
    },
    {
      contactInfo: "987654321",
      date: "August, 10",
      price: "R$ 190",
      type: "car",
      origin: "Belo Horizonte",
      destination: "São Paulo",
      icon: "🚗"
    }
  ];
}




function cardTemplate(card) {
    return `
    <div class="individualCards"> 
    <h2>${card.origin} - ${card.destination} ${card.icon}</h2>
    <p>Contact Info: ${card.contactInfo}<br>
    Date: ${card.date}<br>
    Estimated Price: ${card.price}</p> 
    </div>`
}





function displayCards(cards){
const html = cards.map(cardTemplate);

const div = document.getElementById("cards");

div.innerHTML = html.join("");


}



displayCards(tripCards);

const formDIv = document.querySelector("#divForm");

const carRides = document.querySelector("#carRides");

carRides.addEventListener("click", () => {
    const carCards = tripCards.filter(card => card.type === "car");

    displayCards(carCards);
    
});


const busRides = document.querySelector("#busRides");

busRides.addEventListener("click", () => {
    const busCards = tripCards.filter(card => card.type === "bus");

    displayCards(busCards);
    
});

const planeRides = document.querySelector("#planeRides");

planeRides.addEventListener("click", () => {
    const planeCards = tripCards.filter(card => card.type === "plane");

    displayCards(planeCards);
    
});

const allRides = document.querySelector("#allRides");

allRides.addEventListener("click", () => {

    displayCards(tripCards);
    
});








const hambButton = document.querySelector("#menu");

const navigation = document.querySelector("#navigation");

document.querySelector("#menu").addEventListener("click", () => {

    hambButton.classList.toggle("open");

    navigation.classList.toggle("open");
});





//dinamycally adding a card

function handleForm(){

  

  const contactInfo = document.querySelector("#contactInfo");

  const tripDate = document.querySelector("#tripDate");

  const estimatedPrice = document.querySelector("#estimatedPrice");

  const origin = document.querySelector("#origin");

  const destination = document.querySelector("#destination");


  const contactInfoValue = contactInfo.value;
  const tripDateValue = tripDate.value;
  const estimatedPriceValue = estimatedPrice.value;
  const originValue = origin.value;
  const destinationValue = destination.value;

  //estimatedPriceValue = estimatedPrice.value;

  // getting data from the raido buttons

  const radioButtons = document.querySelectorAll(".transport");
  let selectedTripType = "";
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
          selectedTripType = radioButton.value;
          break;
      }

  }
let offer = [];
  if (selectedTripType === "car"){
  offer = (
    {
      contactInfo: contactInfoValue,
      date: tripDateValue,
      price: estimatedPriceValue,
      type: selectedTripType,
      origin: originValue,
      destination: destinationValue,
      icon: "🚗"
    }
  )
};

if (selectedTripType === "bus"){
  offer = (
    {
      contactInfo: contactInfoValue,
      date: tripDateValue,
      price: estimatedPriceValue,
      type: selectedTripType,
      origin: originValue,
      destination: destinationValue,
      icon: "🚌"
    }
  )
};

if (selectedTripType === "plane"){
  offer = (
    {
      contactInfo: contactInfoValue,
      date: tripDateValue,
      price: estimatedPriceValue,
      type: selectedTripType,
      origin: originValue,
      destination: destinationValue,
      icon: "✈️"
    }
  )
};

  tripCards.push(offer);

  

  localStorage.setItem("tripCards", JSON.stringify(tripCards));

displayCards(tripCards);

}


const form = document.querySelector("#offerForm");

form.addEventListener("submit", handleForm);









//footer



// Getting the year 
const year = document.querySelector("#currentYear");

const today = new Date();

year.innerHTML = `©${today.getFullYear()} | Easy Trips`;


// getting the date and time for last modification

const lastModified = document.querySelector("#lastModified");

const modification = document.lastModified;

lastModified.innerHTML = `Last Modification: ${modification}`;