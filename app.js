// Api call by longitude and latitude

let loc = document.querySelector('#location')
let tempIcon = document.querySelector('#temp-icon')
let tempValue = document.querySelector('#temp-value')
let climate = document.querySelector('#climate')
let iconFile  //change icon according to weather




window.addEventListener('load', () => {
    let long
    let lat 

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude
            lat = position.coords.latitude
            const apiKey = `46c44514fcba789da5c0c5e5fde62fa5`
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`

            fetch(api)
                .then((response) => {
                    return response.json()
                })
                .then(data => {
                    const {name} = data //location name
                    const {feels_like} = data.main
                    const {id, main} = data.weather[0]
                    loc.textContent = name
                    tempValue.textContent = Math.round(feels_like)
                    climate.textContent = main
                    if (id < 250) {
                        tempIcon.src = 'icons/cloud_heavy rain_rain_storm_thunderbolt_icon.svg'
                    } else if (id < 350) {
                        tempIcon.src = 'icons/cloud_drizzle_rain_weather_icon.svg'
                    } else if (id < 550) {
                        tempIcon.src = 'icons/cloud_heavy rain_rain_storm_thunderbolt_icon.svg'
                    } else if (id < 650) {
                        tempIcon.src = 'icons/weather_cold_light snow_snow_icon.svg'
                    } else if (id < 790) {
                        tempIcon.src = 'icons/weather_sun_sunny_temperature_icon.svg'
                    } else if (id === 800) {
                        tempIcon.src = 'icons/clear_weather_icon.svg'
                    } else if (id > 800) {
                        tempIcon.src = 'icons/weather_cloud_clouds_cloudy_icon.svg'
                    }
                    console.log(data)
                })
        })
    }
})