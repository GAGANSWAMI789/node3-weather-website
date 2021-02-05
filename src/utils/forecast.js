const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a4cf0b5d9e0929e553df5cf7cb0cc000&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, { body}) => {
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, " It is currently" + body.current.temperature + "degress out. It feels like" + body.current.feelslike + "degress out.")
        }
    })
}

module.exports = forecast