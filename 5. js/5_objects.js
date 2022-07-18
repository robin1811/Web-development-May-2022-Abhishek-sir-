// var obj = {
// }
// console.log(obj);

// var person = {
//     name : "Abhishek",
//     age : 23,
//     phone : 999999999,
//     isMale : true,
//     height : "175cm",
//     "school name" : "Delhi public school"
// }

// console.log(person)


// console.log(person.name);
// console.log(person.isMale);


// console.log(person['phone']);
// console.log(person['school name']);

// var captainAmerica = {
//     firstname : "Steve",
//     lastName : "Rogers",
//     friends : ["Bucky", "Tony stark", "Bruce Banner"],
//     age : 122,
//     isAvenger : true,
//     address : {
//         state : "Manhattan",
//         city : "New York",
//         country : "USA"
//     },
//     sayHi : function () {
//         console.log(`hello my name is ${captainAmerica.firstname}`);
//     }
// };

// console.log('----------------------------------------');


// console.log(captainAmerica.friends);
// console.log(captainAmerica.friends[1]);
// console.log(captainAmerica["friends"][0]);


// console.log(captainAmerica.sayHi);
// captainAmerica.sayHi();

// console.log(captainAmerica.address["city"]);

// for(let key in captainAmerica) {
//     console.log(key, captainAmerica[key]);
// }

// delete captainAmerica.age;
// console.log(captainAmerica);


// var users = {
//     name : "john",
//     age : 30,
// }


var person = {
    name: "Abhishek", //-> "name":"Abhishek"
    age: 23,
    phone: 999999999, //-> "phone":999999999
    isMale: true,
    height: "170cm",
    "school name": "Delhi Public School",

}

var captainAmerica = {
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Bruce Banner"],
    age: 122,
    isAvenger: true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },
    sayHi: function () {
        console.log(`Hello my name is ${captainAmerica.firstName}`);
        console.log('this is rocket league');
        console.log(this);
        console.log("say hi is called -------------------------------------");
    }
};
console.log("say hi is called -------------------------------------");
captainAmerica.sayHi();

console.log(captainAmerica.friends);
console.log(captainAmerica.friends[1]);
console.log(captainAmerica["friends"][0]);

console.log(captainAmerica.sayHi);
captainAmerica.sayHi();


console.log(captainAmerica.address.city);
console.log("this is rocket league");

for (let key in captainAmerica) {
    // console.log();
    console.log(key, " : ", captainAmerica[key]);
}








