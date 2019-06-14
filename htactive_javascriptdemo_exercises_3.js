let user = {
    name: "John",
    age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}

// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it

// console.log(user.name);

let fruits = ["Apple", "Orange", "Pear"];

// console.log(fruits.pop()); // remove "Pear" and alert it

// console.log(fruits);

// Thuật toán tìm số nguyên tố

var x = 5;

function timsoguyento(x) {
    var i = 2;
    for (i = 2; i < x - 1; i++) {
        if (x % i == 0) return 0;
        else
            return 1;
    }
    if (i == x) return 1;
}


const timsoguyento1 = (x) => {
    var i = 2;
    for (i = 2; i < x - 1; i++) {
        if (x % i == 0) return 0;
        else
            return 1;
    }
    if (i == x) return 1;
};
let songuyento = timsoguyento1(x);
console.log(songuyento);