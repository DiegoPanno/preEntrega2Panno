window.addEventListener('load', () => {
    let lat;
    let lon;

    const clima = document.querySelector('.clima');
    const icono = document.querySelector('.iconoAnimado');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            lat = posicion.coords.latitude
            lon = posicion.coords.longitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e6e1b33bc64dc7e1dc0f12bc8733fd2b&units=metric`
            fetch(url)
                .then((res) => res.json())
                .then((data) => {

                    console.log(data);
                    let temp = data.main.temp;
                    let ciudad = data.name
                    switch (data.weather[0].icon) {
                        case '01n':
                            icono.src = "animated/night.svg"
                            break;
                        case '01d':
                            icono.src = "animated/day.svg"
                            break;
                        case '02n':
                            icono.src = "animated/cloudy-night-1.svg"
                            break;
                        case '01d':
                            icono.src = "animated/cloudy-day-1.svg"
                            break;
                        case '03d':
                            icono.src = "animated/cloudy.svg"
                            break;
                        case '03n':
                            icono.src = "animated/cloudy-night-3.svg"
                            break;
                        case '03d':
                            icono.src = "animated/cloudy-day-3.svg"
                            break;
                        case '09n':
                            icono.src = "animated/rainy-7.svg"
                            break;
                        case '09d':
                            icono.src = "animated/rainy-7.svg"
                            break;
                        case '10n':
                            icono.src = "animated/rainy-6.svg"
                            break;
                        case '10d':
                            icono.src = "animated/rainy-3.svg"
                            break;
                        case '11n':
                            icono.src = "animated/thunder.svg"
                            break;
                        case '11d':
                            icono.src = "animated/thunder.svg"
                            break;
                        case '13n':
                            icono.src = "animated/snowy-6.svg"
                            break;
                        case '13d':
                            icono.src = "animated/snowy-3.svg"
                            break;
                        case '50n':
                            icono.src = "animated/thunder.svg"
                            break;
                        case '50d':
                            icono.src = "animated/thunder.svg"
                            break;
                        default:
                            icono.src = "animated/weather.svg"
                            break;
                    }



                    clima.textContent = `${ciudad}  ${temp}`
                })
                .catch(error => console.log(error))



        })


    }
})



