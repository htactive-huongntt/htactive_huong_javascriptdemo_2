// async
//let i = 0
//console.log("task 1");
//console.log("task 2");
// while(i < 1000000000) {
//     i++
// //     doi 1 s
// }
// setTimeout(()=>console.log("task 3 need many times for waiting"), 1000) // => queue
// let data = fs.readFileSync("test.txt") // wait
// console.log(data);

//fs.readFile("test.txt", "utf-8", (err, data) =>{
//console.log("sdfsdfsdf");
//console.log(data);   
// api.get(data[0], (data0) => console.log(data0))
// api.get(data[1], (data1) => console.log(data1))
// api.get(data[2])
// callback hell
//}) ///
// google.txt
// console.log("task 4");

const fetch = require("node-fetch");

var fs = require('fs');
var arrayName = [];
fs.readFile("link.txt", "utf-8", (err, data) => {
    console.log(data);
    arrayName = data.split(",");
    console.log(arrayName);
    arrayName.forEach(value => {
        fetch("https://" + value).then((resp) => resp.text()).then(function(data1) {
            fs.writeFile("data/" + value.split(".")[0] + ".html", data1, function(err) {
                if (err) throw err;
                console.log("The file was succesfully created and saved!");
            });
        })
    });
})