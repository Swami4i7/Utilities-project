// document.addEventListener('DOMContentLoaded', () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// });

// function showPosition(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     document.getElementById('location').innerText = `Latitude: ${lat}, Longitude: ${lon}`;
//     fetchWeather(lat, lon);
// }

// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             alert("User denied the request for Geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             alert("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             alert("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             alert("An unknown error occurred.");
//             break;
//     }
// }

// function fetchWeather(lat, lon) {
//     const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
//     const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             displayWeather(data);
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//         });
// }

// function displayWeather(data) {
//     const weatherDiv = document.getElementById('weather');
//     weatherDiv.innerHTML = '';

//     data.list.forEach(forecast => {
//         const date = new Date(forecast.dt * 1000);
//         const dateStr = date.toLocaleDateString();
//         const timeStr = date.toLocaleTimeString();

//         const weatherItem = document.createElement('div');
//         weatherItem.classList.add('weather-item');
//         weatherItem.innerHTML = `
//             <h3>${dateStr} ${timeStr}</h3>
//             <p>Temperature: ${forecast.main.temp}°C</p>
//             <p>Weather: ${forecast.weather[0].description}</p>
//         `;
//         weatherDiv.appendChild(weatherItem);
//     });
// }


const apikey="bf919974466206fe86c38f271714983d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response= await fetch(apiUrl+city+`&appid=${apikey}`);
    if(response.status == 404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data= await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="C:/Projekts/JavaScript Projekts/UtilitiesProjekt/WeatherProjekt/images/clouds.png";
    }
    
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="C:/Projekts/JavaScript Projekts/UtilitiesProjekt/WeatherProjekt/images/clear.png";
    }
    
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="C:/Projekts/JavaScript Projekts/UtilitiesProjekt/WeatherProjekt/images/rain.png";
    }
    
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="C:/Projekts/JavaScript Projekts/UtilitiesProjekt/WeatherProjekt/images/drizzle.png";
    }
    
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="C:/Projekts/JavaScript Projekts/UtilitiesProjekt/WeatherProjekt/images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    // checkWeather();
    }   
}

//checkWeather(); 
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);  
})




