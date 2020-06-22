// const request = require('request');

// function tong(a , b ){
//     return new Promise((resolve , reject) => {
//         const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}` 

//         request(url ,{json : true} ,function(error ,response , body){
//             if (error) return reject(error.message)
//             if (!body.success) return reject(body.message + " Cong")
//             resolve(body.message)
//         })
//     })
// }

// function tru(a , b ){
//     return new Promise((resolve , reject) => {
//         const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}` 

//         request(url ,{json : true} ,function(error ,response , body){
//             if (error) return reject(error.message)
//             if (!body.success) return reject(body.message )
//             resolve (body.message)
//         })
//     })
   
// }

// function nhan(a , b ){
//     return new Promise((resolve , reject) => {
//         const url = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}` 

//         request(url ,{json : true} ,function(error ,response , body){
//             if (error) return reject(error.message)
//             if (!body.success) return reject(body.message)
//             resolve (body.message)
//         })
//     })
// }


// function chia(a , b ){
//     return new Promise((resolve , reject) => {
//         const url = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}` 

//         request(url ,{json : true} ,function(error ,response , body){
//             if (error) return reject(error.message)
//             if (!body.success) return reject(body.message)
//             resolve (body.message)
//         })
//     })
// }


// a + b - c
// 5 + 4 - 1

// tong(5 , 4 )
// .then(value => tru(value , null))
// .then(valueHieu => console.log(valueHieu))
// .catch(error =>  console.log(error))

// Promise.all([
//     tong(1,null),
//     tru(2,3),
//     nhan(3,4),
//     chia(4,5)
// ])
// .then(values => console.log(values))
// .catch(error => console.log(error))
// .finally(() => console.log("ket thuc"))

// const fs = require("fs")

// fs.readFile('./data.json',(error , data) => {
//     console.log(JSON.parse(data))
// })

// try {
//     const value = fs.readFileSync('./data.json')
//     console.log(JSON.parse(value) )
// } catch (error) {
//     console.log(error.message)
// }

// const values = [{id : 1 , name : "Nguyen Van A" , age : 20}]

// fs.writeFile('./data.json', JSON.stringify(values) , {encoding : 'utf8'} , (error) => {
//     console.log(error)
// })

// var readlineSync = require('readline-sync');

// const name = readlineSync.question("What is your name : ")
// const questions = ['Insert', 'Delete', 'Update', 'Reset']
// const index = readlineSync.keyInSelect(questions, 'What do you want?');

// switch(index){
//     case 0 : insertDatabase();
//         break
// }

// function insertDatabase(){
//     const name = readlineSync.question("What is your name");
//     const age = readlineSync.question("How old are you");
//     console.log(name , age)
// }