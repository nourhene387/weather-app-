const apikey = "4620cbfab1d36ee8ef5acd3a7917aa1c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");
/********************** */
async function checkWeather(city) {
    try {
        const reponse = await fetch(apiUrl + city + `&appid=${apikey}`);
        var data = await reponse.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        /*if (data.weather[0].main == "Clouds") {
            weatherIcon.scr = 'weathericon-clouds.webp';

        } else if (data.weather[0].main == "Clear") {
            weatherIcon.scr = 'Weather-clear.png';
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.scr = 'Rain.webp';
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.scr = 'Drizzle.webp';
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.scr = 'Mist.webp';
        }*/
        // Set the weather icon based on condition
        switch(data.weather[0].main) {
            case "Clouds":
                weatherIcon.setAttribute('src', 'weathericon-clouds.webp');
                break;
            case "Clear":
                weatherIcon.setAttribute('src', 'Weather-clear.png');
                break;
            case "Rain":
                weatherIcon.setAttribute('src', 'Rain.webp');
                break;
            case "Drizzle":
                weatherIcon.setAttribute('src', 'Drizzle.webp');
                break;
            case "Mist":
                weatherIcon.setAttribute('src', 'Mist.webp');
                break;
            default:
                console.log("Unknown weather condition:", data.weather[0].main);
        }
        
        // Verify the icon src was set
        console.log("Icon src set to:", weatherIcon.src);
    }catch (error) {
        console.error("Error fetching weather data:", error);
    }


}
/*searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)*/
    function handleSearch() {
        if (searchBox.value.trim() !== "") {
            checkWeather(searchBox.value);
        }
    }
    
    // Écouteur d'événement pour le clic sur le bouton
    searchBtn.addEventListener('click', handleSearch);
    
    // Écouteur d'événement pour la touche "Entrée"
    searchBox.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
})
