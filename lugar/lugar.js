const axios = require('axios');

const getLocData = async(direccion) => {

    let encodedURL = encodeURI(direccion)

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}.`);
    }


    let location = respuesta.data.results[0].formatted_address;
    let lat = respuesta.data.results[0].geometry.location.lat;
    let lng = respuesta.data.results[0].geometry.location.lng;


    return {
        direccion: location,
        latitud: lat,
        longitud: lng
    }
}

module.exports = {
    getLocData
}