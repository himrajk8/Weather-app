const apiKey = "80dca08bc0a33dcaaf3b68685fa0a489";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

async function checkWeather(city) {
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity +"%";
    document.querySelector(".wind").innerText = data.wind.speed +"km/h";
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
    
});

checkWeather();