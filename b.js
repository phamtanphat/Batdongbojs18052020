const request = require('request');

function tong(a , b ){
    return new Promise((resolve , reject) => {
        const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}` 

        request(url ,{json : true} ,function(error ,response , body){
            if (error) return reject(error.message)
            if (!body.success) return reject(body.message)
            resolve(body.message)
        })
    })
}

function tru(a , b , cb){
    const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}` 

    request(url ,{json : true} ,function(error ,response , body){
        if (error) return cb(error.message)
        if (!body.success) return cb(body.message)
        cb (null,body.message)
    })
}

function nhan(a , b , cb){
    const url = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}` 

    request(url ,{json : true} ,function(error ,response , body){
        if (error) return cb(error.message)
        if (!body.success) return cb(body.message)
        cb (null,body.message)
    })
}

function chia(a , b , cb){
    const url = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}` 

    request(url ,{json : true} ,function(error ,response , body){
        if (error) return cb(error.message)
        if (!body.success) return cb(body.message)
        cb (null,body.message)
    })
}

// a + b - c
// 5 + 4 - 1

tong(5 , null )
.then(value => console.log(value))
.catch(error =>  console.log(error))