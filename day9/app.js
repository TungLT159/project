const search = document.querySelector('.search')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const value = document.querySelector('.value')
const shortDesc = document.querySelector('.short-desc')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const humidity = document.querySelector('.humidity span')
const time = document.querySelector('.time')
const content = document.querySelector('.content')
const body = document.querySelector('body')

async function changeWeatherUI(capitalValue) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalValue}&appid=e1d27fcb933db2bc2af85344f448e959`
    let data = await fetch(apiURL).then(res => res.json())
    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + ' ' + '(m)'
        wind.innerText = data.wind.speed + ' ' + '(m/s)'
        humidity.innerText = data.clouds.all + ' ' + '(%)'
        let temp = Math.round(data.main.temp - 273.15) + ' ' + '°C'
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

        temp >= 18 ?
            (document.body.className = 'warm') :
            (document.body.className = 'cold')
            // if (temp <= 10) {
            //     document.body.className = 'cold'
            // } else if (11 < temp <= 27) {
            //     document.body.className = 'warm'
            // } else if (temp > 28) {
            //     document.body.className = 'hot'
            // }

    } else {
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', e => {
    let capitalValue = search.value.trim()
    if (e.code === 'Enter') {
        changeWeatherUI(capitalValue)
    }
})