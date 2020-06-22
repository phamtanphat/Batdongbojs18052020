const request = require('request');


function cong(a , b ){
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

async function xuly(){
    try {
        const tong = await cong(5 , null)
        const hieu = await tru(tong , 1)
        console.log(hieu)
    } catch (error) {
        console.log(error)
    } 
}

xuly()