const request = require('request')

const geocode = (address, callback) => {
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiY29zdGFpdnAiLCJhIjoiY2p2c2F4OHUzMGp1NDQ0cG50MjJ6Nm05diJ9.SgBwAZ8-p7ipGaj6xZ3AKA'
  console.log(geoUrl)
    request({
        url: geoUrl,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to GeoMap API', undefined)
        } else if (response.body.features.length===0) {
            callback('Unable to find location.Try another search.', undefined)
        } else {
            callback(undefined, {

                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name

            })
        }
    })
}

module.exports = geocode