const apiKey="7492b2a3dd643d0df7d2b080879d5756";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main == "clouds"){
            weatherIcon.src="images/clouds.png" ;
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main =="drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
}) 