const request = require('request')

const url = 'https://api.darksky.net/forecast/545676cbc70aa8ce140aa6d21c2aa6d3/'

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/goa.json?limit=1&access_token=pk.eyJ1IjoiY29zdGFpdnAiLCJhIjoiY2p2c2F4OHUzMGp1NDQ0cG50MjJ6Nm05diJ9.SgBwAZ8-p7ipGaj6xZ3AKA'

request({
    url: geoUrl,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to GeoMap API')
    } 
    else if(response.body.message){
        console.log('Unable to find location.Try another searh.')
    }
    else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)

        const weatherUrl = url+latitude+','+longitude

        request({
            url: weatherUrl,json:true
        }, (error, response) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Temperatue is '+response.body.currently.temperature+'. Possibility of rain is '+response.body.currently.precipProbability+' %')
            }
        })
    }
})


