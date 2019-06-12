// let firstname = "Huong";
// let middlename = "Thi Thu";
// let familyname = "Nguyen";
// // console.log('====================================');
// // console.log(firstname.toUpperCase);
// // console.log('====================================');
// // console.log("Hello ! " + firstname + " " + middlename + " " + familyname);

// var str = 'For more information, see Chapter 3.4.5.1';
// var found = str.match(str);
// var split = str.split(3)[1];
// // console.log(split);

// let count = "123";
// // console.log(count.repeat(5));
// // console.log(str.slice(4, -2));
// // console.log('(1, 2): ' + str.substr(1, 2));
// // console.log('(-3, 2): ' + str.substr(-3, 2));

// /// Array 

// // -> tạo mảng mới và lấy ra phần tử thỏa mãn điều kiện
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// // console.log(result);

// var number = [];
// for (var i = 0; i <= 100; i++) {
//     number.push(i);
// }
// for (var i = 0; i <= number.length; i++) {
//     if (number[i] / 2 == 0) {

//     }
// }
// var n = 100;
// var i = 0;
// while (i * i <= n) {
//     if (i * i == n) {
//         printf("%d la so chinh phuong!\n", n);
//         return 0;
//     }
//     ++i;
// }

// const students = [{
//         id: 1,
//         name: "Nguyen Thi Phuong Nhung",
//         age: 20,
//         score: { math: 10, english: 8, plt: 7 }
//     },
//     {
//         id: 2,
//         name: "Nguyen Thi Thu Huong",
//         age: 20,
//         score: { math: 8, english: 6, plt: 5 }
//     },
//     {
//         id: 3,
//         name: "Nguyen Thi My Trang",
//         age: 20,
//         score: { math: 2, english: 8, plt: 2 }
//     }, {
//         id: 4,
//         name: "Nguyen Van Gia Thinh",
//         age: 20,
//         score: { math: 4, english: 5, plt: 7 }
//     },
//     {
//         id: 5,
//         name: "Nguyen Van Vinh",
//         age: 20,
//         score: { math: 10, english: 5, plt: 7 }
//     }
// ]

// // [{},{},...] -> ["", "", ""]
// // query
// const passedStudents = students.filter(student => student.grade > 5).map(passedStudent => passedStudent.name)
//     // const totalStudents = students.filter(student => student.grade > 5).reduce((sum, curr) => sum + curr.grade, 0)
// const totalStudents = students.filter(student => student.grade > 5).map(passedStudent => passedStudent.grade).reduce((sum, current) => sum + current, 0)
// console.log(totalStudents);
// // const studentsId = [1, 3, 5]

// // const mappedStudentById = studentsId.map(id => {
// //     let student = students.find(std => std.id == id)
// //     return student
// // });
// // console.log(passedStudents);


// // // Exercises about filter, reduce, map, foreach

// // // Exercises 1.

// // var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
// // for (var i = 0; i < names.length; i++) {
// //     console.log(names[i]);
// // }

// // names.forEach()
// function myMap(coll, callback) {
//     let returnMap = []
//     for (let i = 0; i < coll.length; i++) {
//         returnMap.push(callback(coll[i]))
//     }
//     return returnMap
// }

// let demo = myMap(students, (item) => item.name)
// console.log(demo);

// function myFilter(coll, callback) {
//     let returnFilter = []
//     for (var i = 0; i < coll.length; i++) {
//         if (coll[i].score.math >= 5) {
//             returnFilter.push(coll[i])
//         }
//     }
//     return returnFilter;
// }

// let demoFilter = myFilter(students)
// console.log(demoFilter);

// function myFilterBack(coll, callback) {
//     let returnFilterBack = []
//     coll.forEach(item => {
//         if (callback(item)) {
//             returnFilterBack.push(item)
//         }
//     })
//     return returnFilterBack;
// }
// let demoFilterBack = myFilterBack(students, item => item.name == "Nguyen Thi Thu Huong")
// console.log(demoFilterBack);


/// bai tap bat dau tu day anh chi nhe

// bai 1
function(console) {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// bai 2
function(console) {
    var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

    names.forEach(function(name) {
        console.log(name);
    });
}

// bai 3
function() {
    var newReleases = [{
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id: 432534, time: 65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [4.0],
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": [5.0],
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ],
        videoAndTitlePairs = [];

    newReleases.forEach(function(video) {
        videoAndTitlePairs.push({ id: video.id, title: video.title });
    });

    return videoAndTitlePairs;
}
//

// bai 4

Array.prototype.map = function(projectionFunction) {
    var results = [];
    this.forEach(function(itemInArray) {
        results.push(projectionFunction(itemInArray));

        // ----------fg-- INSERT CODE HERE! ----------------------------
        // Apply the projectionFunction to each item in the array and add
        // each result to the results array.
        // Note: you can add items to an array with the push() method.
        // ------------ INSERT CODE HERE! ----------------------------

    });

    return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'

// bai 5 
function() {
    var newReleases = [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ];

    const a = newReleases.map(video => ({ id: video.id, title: video.title }));
    // ------------ INSERT CODE HERE! -----------------------------------
    // Use map function to accumulate {id, title} pairs from each video.
    return a // finish this expression!
        // ------------ INSERT CODE HERE! -----------------------------------

}
// bai 6
function() {
    var newReleases = [{
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            },
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ],
        videos = [];
    newReleases.forEach(function(video) {
        if (video.rating == 5.0) {
            videos.push(video);
        }

    });

    // ------------ INSERT CODE HERE! -----------------------------------
    // Use forEach function to accumulate every video with a rating of 5.0
    // ------------ INSERT CODE HERE! -----------------------------------

    return videos;
}

// bai 7 

Array.prototype.filter = function(predicateFunction) {
    var results = [];
    this.forEach(function(itemInArray) {
        if (predicateFunction(itemInArray)) {
            results.push(itemInArray);
        }
    });

    return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

// bai8 
function() {
    var newReleases = [{
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ];

    const a = newReleases.filter(video => video.rating == 5.0).map(vid => vid.id)
        // ------------ INSERT CODE HERE! -----------------------------------
        // Chain the filter and map functions to select the id of all videos
        // with a rating of 5.0.

    return a // Complete this expression
        // ------------ INSERT CODE HERE! -----------------------------------
}

// bai9
function() {
    var movieLists = [{
                name: "New Releases",
                videos: [{
                        "id": 70111470,
                        "title": "Die Hard",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id: 432534, time: 65876586 }]
                    }
                ]
            },
            {
                name: "Dramas",
                videos: [{
                        "id": 65432445,
                        "title": "The Chamber",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Fracture",
                        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id: 432534, time: 65876586 }]
                    }
                ]
            }
        ],
        allVideoIdsInMovieLists = [];

    //for(var i = 0; i < movieLists.length; i++ ){

    // for(var j = 0; j < movieLists[i].videos.length; j++){
    // 
    //   allVideoIdsInMovieLists.push(movieLists[i].videos[j].id)

    // }
    // }

    movieLists.forEach(function(movielist) {

        movielist.videos.forEach(function(video) {

            allVideoIdsInMovieLists.push(video.id);

        });

    });



    // ------------   INSERT CODE HERE!  -----------------------------------
    // Use two nested forEach loops to flatten the movieLists into a list of
    // video ids.
    // ------------   INSERT CODE HERE!  -----------------------------------

    return allVideoIdsInMovieLists;

}

// bai 10

Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        subArray.forEach((item) => results.push(item))
            // ------------ INSERT CODE HERE! ----------------------------
            // Add all the items in each subArray to the results array.
            // ------------ INSERT CODE HERE! ----------------------------
    });

    return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array


// bai 11
function() {
    var movieLists = [{
            name: "New Releases",
            videos: [{
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "Dramas",
            videos: [{
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];

    return movieLists.map(movieList => movieList.videos.map(video => video.id))
        .concatAll();
    // movieLists // Complete this expression!

    // ------------   INSERT CODE HERE!  -----------------------------------
    // Use map and concatAll to flatten the movieLists in a list of video ids.
    // ------------   INSERT CODE HERE!  -----------------------------------



}

// bai 12

function() {
    var movieLists = [{
            name: "Instant Queue",
            videos: [{
                    "id": 70111470,
                    "title": "Die Hard",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 654356453,
                    "title": "Bad Boys",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        },
        {
            name: "New Releases",
            videos: [{
                    "id": 65432445,
                    "title": "The Chamber",
                    "boxarts": [
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 4.0,
                    "bookmark": []
                },
                {
                    "id": 675465,
                    "title": "Fracture",
                    "boxarts": [
                        { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                        { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                        { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                    ],
                    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                    "rating": 5.0,
                    "bookmark": [{ id: 432534, time: 65876586 }]
                }
            ]
        }
    ];


    // Use one or more map, concatAll, and filter calls to create an array with the following items
    // [
    //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
    //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
    //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
    // ];

    return movieLists.map((movie) => {
        return movie.videos.map((video) => {
            return video.boxarts.filter((boxart) => {
                return boxart.width === 150;
            }).map((item) => {
                return {
                    "id": video.id,
                    "title": video.title,
                    "boxart": item.url
                };
            })
        }).concatAll();
    }).concatAll();
}


// end