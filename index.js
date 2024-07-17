




  
const API_KEY = "f9911301c479abe39418c5ffec251ef9";
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){
  const response=await fetch(URL+city+`&appid=${API_KEY}`);
  var data=await response.json();
  // console.log(data);
  // const tempCelsius = data.main.temp - 273.15;
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/h" ;

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "./clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "./clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "./rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "./drizzle.png";
  }
  else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "./mist.png";
  }
  document.querySelector(".weather").style.display="block";
}
  searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

  })
       
   