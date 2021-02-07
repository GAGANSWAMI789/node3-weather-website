const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a4cf0b5d9e0929e553df5cf7cb0cc000&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, { body}) => {
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, " It is currently" + body.current.temperature + "degress out. It feels like" + body.current.feelslike + "degress out. The humidity is" + body.current.humidity + "%. The wind speed is" + body.current.wind_speed + ". The wind degree is " + body.current.wind_degree + ". The wind dir. " + body.current.wind_dir + ". the pressure is " + body.current.pressure + ". The precipitation is" + body.current.precip  + ". The cloud cover is " + body.current.cloudcover + ". The uv index is" + body.current.uv_index + ". The visibility is" + body.current.visibility + ". The weather icon is" + body.current.weather_icons + "."
            
            
            ) 
        }
    })
}

module.exports = forecast