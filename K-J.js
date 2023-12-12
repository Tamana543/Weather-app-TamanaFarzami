function showTemperature(response) {
let temperatureDate = document.querySelector("#current-temperature-date");
temperatureDate.innerHTML = Math.round(response.data.temperature.current);

}



function changeHeading(event) {

    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let headingOne = document.querySelector("h1");
    headingOne.innerHTML= searchInput.value;
    let city = searchInput.value;
    let apiKey = "002f53aof18d4ab43a5e5047f8f74ctd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    
    axios.get(apiUrl).then(showTemperature);
   
    }
let form = document.querySelector("#first-form");
form.addEventListener("submit", changeHeading);


let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let date = ` ${day} ${hour}:${minute}`;
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = date;

  //creat an API url
     // make the API call
     //display the temperature line 6
   //select the temperature element
//inject the current temperature inside the tempereture element.
// inject the city name inside the tempereture elemenet. line 1


