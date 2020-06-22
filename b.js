const request = require('request');

function tong(a , b , cb){
    const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}` 

    request(url ,{json : true} ,function(error ,response , body){
        if (error) return cb(error.message)
        if (!body.success) return cb(body.message)
        cb (null,body.message)
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

tong(5 , 0 , (error , value) => {
    if (error) return 
    tru(value , 1 ,(errorTru , valueTru) => {
        console.log(errorTru || valueTru)
    })
})