import fetch from "node-fetch";
const API_KEY = "AIzaSyCsET4iZRhfUz0qHOT7WprfsOWTSRDEEyA"


// https.get("https://factchecktools.googleapis.com/v1alpha1/claims:search?query=vaksin%20covid%20mematikan&key=" + API_KEY, function (response) {
//     console.log(response);
//     response.on("data", function (data) {
//         result = (JSON.parse(data))
//     })
// })

// console.log(result)

// console.log(
//     https.get("https://factchecktools.googleapis.com/v1alpha1/claims:search?query=vaksin%20covid%20mematikan&key=" + API_KEY, (res) => {
//         return (res.on("data", (data) => {
//             const result = JSON.parse(data);
//             return result
//         }))
//     })

// )

// app.listen(3000, function () {
//     console.log("Server is running on port");
// })

// const https = require('https')
// var https = require('https');
// return new Promise((resolve, reject) => {
//     var body = "";
//     https.get("https://factchecktools.googleapis.com/v1alpha1/claims:search?query=vaksin%20covid%20mematikan&key=" + API_KEY, function (res) {
//         res.on('data', function (data) {
//             body += data;
//         });
//         res.on('end', function () {
//             var response = JSON.parse(body);
//             resolve(issueDesc);
//         });
//         res.on('error', (err) => {
//             reject(err);
//         })
//     });
// });

async function foo() {
    let obj;

    const res = await fetch("https://factchecktools.googleapis.com/v1alpha1/claims:search?query=vaksin%20covid%20mematikan&key=" + API_KEY)

    obj = await res.json();

    console.log(obj)
}

foo();