window.addEventListener('load', ()=> {
    let longitude;
    let latitude;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            const api = `api.openweathermap.org/data/2.5/weather?" + "
            lat=${latitude}&lon=${longitude}&appid=e70cf8b646e845e2a292cee7b31afc11`
        })

        fetch()
    } else {
        h1.textContent = "Please enable location."
    }
});