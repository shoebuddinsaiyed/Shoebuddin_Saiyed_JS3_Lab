let searchbox = document.querySelector(".searchbox")

searchbox.addEventListener("keypress", setQuery);

function setQuery(e) {
    if (e.keyCode == 13) {
        callWeatherApi(searchbox.value)
    }
}

function callWeatherApi(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            showResults(res)
        })
}

function showResults(weatherData) {
    let city = document.querySelector(".city")
    let temp = document.querySelector(".temp")

    let weather = document.querySelector(".weathertype")
    let date = document.querySelector(".date")
    let highLow = document.querySelector(".hi-low")
    city.innerText = `${weatherData.name}, ${weatherData.sys.country}`
    temp.innerText = `${Math.round(weatherData.main.temp)}°c`
    highLow.innerText = `${Math.round(weatherData.main.temp_min)}°c / ${Math.round(weatherData.main.temp_max)}°c`
    weathertype.innerText = `${weatherData.weather[0].main}`
    date.innerText = formDate();
}
function formDate() {
    let months = ["January", "Februray", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let currentDate = new Date();
    return `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`
}