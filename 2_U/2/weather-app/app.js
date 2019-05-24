const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2];

if(!address)
{
    console.log('Please provide an address to forecast')
    return
}

geocode(address, (error, {latitude,longitude,location}) => {
    if (error) {
        return console.log(error)
    }
    forecast(latitude, longitude, (error, {temperature,cloudCover}) => {
        if (error)
            return console.log(error)

        console.log(location)
        console.log(temperature)
        console.log('Cloud Cover:',cloudCover)
    })
})