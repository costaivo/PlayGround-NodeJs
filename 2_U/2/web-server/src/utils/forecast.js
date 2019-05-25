const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const weatherUrl = 'https://api.darksky.net/forecast/545676cbc70aa8ce140aa6d21c2aa6d3/'


    const url = weatherUrl + latitude + ',' + longitude+'/?units=si'

    request({
         url,
        json: true
    }, (error, {body}) => {
        if (error) {
           callback('Unable to connect to weather forecast service',undefined)
        } else if(body.error){
            callback('Invalid coordinates',undefined)
        }
        else{
            console.log(body)
            callback(undefined,{
                forecast:body.daily.summary,
                icon:body.daily.icon,
                temperature: body.currently.temperature ,
                cloudCover:body.currently.cloudCover*100 + ' %'
            })
        }
    })
}

module.exports = forecast