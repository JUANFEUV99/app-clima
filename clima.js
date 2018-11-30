const req = require("axios");

let get_temp = async(lat, lng) => {
    let qr = await req.get(`http://api.openweathermap.org/data/2.5/weather?lat=${encodeURI(lat)}&lon=${encodeURI(lng)}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`, e => Console.log("Error"));
    return (qr.data.main.temp);
}

module.exports = {
    get_temp
}