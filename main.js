const API_KEY = `6e73faf437344f508a5a3aa98c80d351`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

//const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getWeather = async(city) => {
    weather.innerHTML = `<h2>We are getting your data..</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const res =await fetch(url);

    const data = await res.json(); //data is the object that we get from the api
    console.log(data);
    return showWeather(data);
  
}

const showWeather = (data) => {
  if(data.cod == "404"){
    weather.innerHTML = `<h2>City not found</h2>`;
    return;
  }

    weather.innerHTML = ` 
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" > 
     </div>
    <div>
    <h2>${data.main.temp} ℃</h2>
    <h4>${data.weather[0].main} </h4>
   </div>
   `
}




form.addEventListener(
    "submit",

    function(event) {
     getWeather(search.value);
        event.preventDefault();
    }
)