const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/545676cbc70aa8ce140aa6d21c2aa6d3/'


    const weatherUrl = url + latitude + ',' + longitude

    request({
        url: weatherUrl,
        json: true
    }, (error, response) => {
        if (error) {
           callback('Unable to connect to weather forecast service',undefined)
        } else if(response.body.error){
            callback('Invalid coordinates',undefined)
        }
        else{
            callback(undefined,{
                temperature: response.body.currently.temperature ,
                 rainPossibility:response.body.currently.precipProbability + ' %'
            })
        }
    })
}

module.exports = forecast