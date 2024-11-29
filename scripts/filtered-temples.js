const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "images/accra_ghana_temple_lds.jpg"
    },

    {
        templeName: "Brazil Belém",
        location: "Belém, Brazil",
        dedicated: "2022, November, 20",
        area: 28675,
        imageUrl:
            "images/belem_brazil_temple.jpg"
    },

    {
        templeName: "Rio de Janeiro Brazil",
        location: "Rio de Janeiro, Brazil",
        dedicated: "2022, May, 8",
        area: 29966,
        imageUrl:
            "images/rio_de_janeiro_temple.jpg"
    },


    // Add more temple objects here...
];


// doing the temple cards

function cardTemplate(temple) {
    return `
    <figure>
    <h2>${temple.templeName}</h2>
    <p>Location: ${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Size: ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt ="${temple.templeName}" loading:"lazy">
    </figure>`
}


const html = temples.map(cardTemplate);

const div = document.querySelector("#figures");

div.innerHTML = html.join("");












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



// getting navs

const oldNav = document.querySelector("#old");


oldNav.addEventListener("click", () =>{
    document.querySelector("#figures").innerHTML = "";
    
    let oldTemples = temples.filter(function (temple) {

        const new_string = temple.dedicated.split(",");

        const dedicatedYear = parseInt(new_string[0]);

        return dedicatedYear < 1900;


    });
    


    const html = oldTemples.map(cardTemplate);

    const div = document.querySelector("#figures");

    div.innerHTML = html.join("");
});

    
    

const newNav = document.querySelector("#new");

newNav.addEventListener("click", () =>{
    document.querySelector("#figures").innerHTML = "";
    
    let oldTemples = temples.filter(function (temple) {

        const new_string = temple.dedicated.split(",");

        const dedicatedYear = parseInt(new_string[0]);

        return dedicatedYear > 2000;


    });
    


    const html = oldTemples.map(cardTemplate);

    const div = document.querySelector("#figures");

    div.innerHTML = html.join("");
});






const largeNav = document.querySelector("#large");


largeNav.addEventListener("click", () =>{
    document.querySelector("#figures").innerHTML = "";
    
    let oldTemples = temples.filter(function (temple) {


        return temple.area > 90000;


    });
    


    const html = oldTemples.map(cardTemplate);

    const div = document.querySelector("#figures");

    div.innerHTML = html.join("");
});




const smallNav = document.querySelector("#small");


smallNav.addEventListener("click", () =>{
    document.querySelector("#figures").innerHTML = "";
    
    let oldTemples = temples.filter(function (temple) {


        return temple.area < 10000 ;


    });
    


    const html = oldTemples.map(cardTemplate);

    const div = document.querySelector("#figures");

    div.innerHTML = html.join("");
});



const Home = document.querySelector("#home");

Home.addEventListener("click", () =>{
    
    


    const html = temples.map(cardTemplate);

    const div = document.querySelector("#figures");

    div.innerHTML = html.join("");
});