// Init weather object
const weather = new Weather('Chernihiv', '74');
// Inin UI
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Kyiv', '30');

function getWeather() {
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}