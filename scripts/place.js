const windChill = document.querySelector("#windChill")

const temperature = document.querySelector("#temperature");
const splitTemperature = temperature.textContent.split(" ");

const windSpeed = document.querySelector("#windSpeed");
const splitWinsSpeed = windSpeed.textContent.split(" ");


const pureTemperature = splitTemperature[0];
const pureWindSpeed = splitWinsSpeed[0];


function calculateWindChill (temp, speed){

    if (temp <= 10 && speed > 4.8){
        
        const chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        return chill;
    }
    
    else{
       const chill = "N/A";
       return chill;
    }

    

}

if (pureTemperature <= 10 && pureWindSpeed > 4.8){
windChill.textContent = `${calculateWindChill(pureTemperature, pureWindSpeed).toFixed(1)}°C`;

}

else{
    windChill.textContent = 'N/A';
}   






