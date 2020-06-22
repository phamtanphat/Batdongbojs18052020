const request = require('request');

function tong(a , b ){
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}` 

        request(url ,{json : true} ,function(error ,response , body){
            if (error) return reject(error.message)
            if (!body.success) return reject(body.message + " Cong")
            resolve(body.message)
        })
    })
}

function tru(a , b ){
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}` 

        request(url ,{json : true} ,function(error ,response , body){
            if (error) return reject(error.message)
            if (!body.success) return reject(body.message )
            resolve (body.message)
        })
    })
   
}

function nhan(a , b ){
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}` 

        request(url ,{json : true} ,function(error ,response , body){
            if (error) return reject(error.message)
            if (!body.success) return reject(body.message)
            resolve (body.message)
        })
    })
}


function chia(a , b ){
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}` 

        request(url ,{json : true} ,function(error ,response , body){
            if (error) return reject(error.message)
            if (!body.success) return reject(body.message)
            resolve (body.message)
        })
    })
}


// a + b - c
// 5 + 4 - 1

// tong(5 , 4 )
// .then(value => tru(value , null))
// .then(valueHieu => console.log(valueHieu))
// .catch(error =>  console.log(error))

Promise.all([
    tong(1,null),
    tru(2,3),
    nhan(3,4),
    chia(4,5)
])
.then(values => console.log(values))
.catch(error => console.log(error))