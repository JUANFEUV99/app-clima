const position = require("./posicion");
const weather = require("./clima");
const argv = require("yargs")
    .options({
        place: {
            demand: true,
            alias: "p"
        }
    })
    .argv;

let place = argv.place;

position.get_pstn(place).then(res => {
        weather.get_temp(res.Latitud, res.Longitud)
            .then(wh => console.log(`La temperatura de ${place} es ${wh} grados celsius`).catch(
                e => console.log("Ha ocurrido un error")
            ));
    })
    .catch(e => console.log("Ha ocurrido un error"));