const https = require('https')
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/margoa%2Cgoa.json?limit=1&access_token=pk.eyJ1IjoiY29zdGFpdnAiLCJhIjoiY2p2c2F4OHUzMGp1NDQ0cG50MjJ6Nm05diJ9.SgBwAZ8-p7ipGaj6xZ3AKA'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error',(error)=>{
    console.log('An error',error)
})

request.end()