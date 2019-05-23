const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2];

if(!address)
{
    console.log('Please provide an address to forecast')
    return
}

geocode(address, (error, data) => {
    if (error) {
        return console.log(error)
    }

    console.log(data)
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error)
            return console.log(error)

        console.log(data.location)
        console.log(forecastData.temperature)
    })
})