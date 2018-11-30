const req = require("axios");
let get_pstn = async(dir) => {
    let qr = await req.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(dir)}&key=AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y`, e => console.log("Ha ocurrido un error"))
    let rs = (qr.data.results[0].geometry.location);
    return {
        Latitud: rs.lat,
        Longitud: rs.lng
    };
}

module.exports = {
    get_pstn
};