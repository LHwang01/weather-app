window.addEventListener('load', () => {
    let longitude;
    let latitude;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector(".temperature-degree");    
    let locationTimezone = document.querySelector('.location-timezone');

    console.log("Hi");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;  
            latitude = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e70cf8b646e845e2a292cee7b31afc11&units=imperial `;
            
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    temperatureDegree.textContent = data.main.temp;
                    temperatureDescription.textContent = data.weather[0].main;
                    locationTimezone.textContent = data.name;
            })
        })
    } else {
        h1.textContent = "Please enable location."
    }
});