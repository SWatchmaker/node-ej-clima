const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv

lugar.getLocData(argv.direccion)
    .then(resp => {
        console.log(`Localidad: ${resp.direccion}.`);
        clima.getClima(resp.latitud, resp.longitud)
            .then(temp => console.log(`Temperatura: ${temp} °C`));
    })
    .catch(err => console.log('No se pudo determinar la temperatura para la locación indicada.'));