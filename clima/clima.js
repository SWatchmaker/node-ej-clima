const axios = require('axios');

const getClima = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=1e7234c56b9a658b3074805e1f07fcef`;
    let respuesta = await axios.get(url);
    let temp = respuesta.data.main.temp;

    return temp;
}

module.exports = {
    getClima
}