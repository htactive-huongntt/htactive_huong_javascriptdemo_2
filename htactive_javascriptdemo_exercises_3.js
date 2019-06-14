
// prime es5 version
var x = 5;

function timsoguyento(x) {
    var i = 2;
    for (i = 2; i < x - 1; i++) {
        if (x % i == 0) return 0;
        else return 1;
    }
    if (i == x) return 1;
}

// prime es6 version
const timsoguyento1 = (x = 2) => {
    var i = 2;
    for (i = 2; i < x - 1; i++) {
        if (x % i == 0) return 0;
        else return 1;
    }
    if (i == x) return 1;
};
let songuyento = timsoguyento1(x);
console.log(songuyento);

// ###################################################################
// es5
[1, 2, 3].map(function(n) {
    return n + 1;
  });
//es6
[1, 2, 3].map((n) => n + 1);
// ###################################################################

// parameter default es6
function f (x, y = 7, z = 42) {
    return x + y + z;
}
console.log(f(50));

// parameter default es5
function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
f(1) === 50;
// ###################################################################

 //  rest parameter es6
function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(1, 2, "hello", true, 7));

// rest parameter es5
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
console.log(f(1, 2, "hello", true, 7));
// ###################################################################

// array es6
const nums = [5,10,11,12,15,78,30,90];
const fives = [];
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
 })
console.log(fives);

 // array es5
const nums = [5,10,11,12,15,78,30,90];

nums.forEach(function (v){
    if (v % 5 === 0)
        fives.push(v)
 })
 console.log(fives);