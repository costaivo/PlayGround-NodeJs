const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiY29zdGFpdnAiLCJhIjoiY2p2c2F4OHUzMGp1NDQ0cG50MjJ6Nm05diJ9.SgBwAZ8-p7ipGaj6xZ3AKA'

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to GeoMap API', undefined)
        } else if (body.features.length===0) {
            callback('Unable to find location.Try another search.', undefined)
        } else {
            const {features} = body;
            
            callback(undefined, {

                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name

            })
        }
    })
}

module.exports = geocode