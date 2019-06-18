import { resolve } from "path";
import { rejects } from "assert";
import { promises, fstat } from "fs";

// callback

let add = (a, b, cb) => {
    setTimeout(() => {
        // let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so truyen vao phai la so !'))
        }
        return cb(undefined, a + b);
    }, 1000);
}

add(4, '5', (err, result) => {
    if (err) return console.log('Loi: ' + err);
    console.log('ket qua: ' + result);
});


// callback hell (dien tich hinh thang)

let mutiply = (a, b, cb) => {
    setTimeout(() => {
        // let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so truyen vao phai la so !'))
        }
        return cb(undefined, a * b);
    }, 1000);
}

let devide = (a, b, cb) => {
    setTimeout(() => {
        // let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so truyen vao phai la so !'))
        }
        if (b === 0) return cb(new Error('Chia cho so 0 mat roi'))
        return cb(undefined, a / b);
    }, 1000);
}

let tinhdientichhinhthang = (a, b, h, cb) => {
    add(4, 5, (err, result) => {
        if (err) return cb(err);
        mutiply(result, h, (err, result) => {
            if (err) return cb(err);
            devide(result, 2, (err, result) => {
                if (err) return cb(err);
                cb(undefined, result);
            });
        });
    });
}

tinhdientichhinhthang(4, 5, 2, (err, result) => {
    if (err) return console.log(err + " ");
    console.log(result);
});


// Promise read file
var fs = require('fs');
let read = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

read('data/facebook.txt').then(result => console.log(result), err => console.log(err));

// promise 

let addPromise = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return rejects(new Error('Tham so truyen vao phai la kieu number !'));
            }
            resolve(a + b);
        }, 1000);
    });
}

addPromise(4, 5).then(res => console.log(res), Err => console.log(err + ' '));

// promise lien tiep nhau
addPromise(4, 5).then(res => addPromise(res, 6)).then(result => console.log(result)).catch(err => console.log('loi: ' + err));


// dung await de tinh dien tich hinh thang

let multiplyPromise = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return rejects(new Error('Tham so truyen vao phai la kieu number !'));
            }
            resolve(a * b);
        }, 1000);
    });
}

let devidePromise = (a, b) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return rejects(new Error('Tham so truyen vao phai la kieu number !'));
            }
            if (b === 0) {
                return reject(new Error('Chia cho so 0 mat roi !'));
            }
            resolve(a / b);
        }, 1000);
    });
}

let dientichhinhthang = async(a, b, h) => {
    try {
        let ab = await addPromise(a, b);
        let abh = await multiplyPromise(ab, h);
        let result = await devidePromise(abh, 2);
        console.log(result);
    } catch (e) {
        console.log(e + " ");
    }
}

dientichhinhthang(4, 5, 9);