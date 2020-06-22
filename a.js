// let a = 5
// getData((a) => console.log(a))

// function getData(cb){
    setTimeout(() => {
        a = a + 1
        cb(a)
    } , 1000)
// }
let a 

let b = 6

xulylogic(function(valueA){
    console.log(valueA + b)
})

function xulylogic(cb){
    setTimeout(() => {
        a = 1
        cb(a)
    } , 1000)
}


const request = require('request');
// npm i request


// function getTempCity(cityName , cb){
//     const URL = `http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`

    // request(URL ,{json : true} ,function(error ,response , body){
    //     if (error) return cb(error.message)
    //     if (body.cod != 200) return cb(body.message)
    //     cb (null,body.main.temp)
    // })
// }

// getTempCity("Lodon",function(error , response){
//     console.log(error || response)
// })

https://pheptinhonline.herokuapp.com/tru/1/1