const person = {
    x:10,
    firstName: 'Gaurav',
    lastName: 'Gupta',
    hobbies: ['Coding', 'Gym'],
    isMarried: false,
    hasGf: false,
    getFullName: function(){
        return 'Gaurav Gupta'
    },
    address: {
        hno: 1,
        street: 1,
        countrycode: 'IN',
        state: 'PB'
    }
}

console.log(person.address)

let p1 = {
    fname: 'Hitesh',
    lname: 'Ch',
    address: {
       h: 1,
       s: 1
    }
}

const p1KaString = JSON.stringify(p1)
console.log(p1KaString)
let p2 = JSON.parse(p1KaString)


// let p2 = {
//     fname: p1.fname,
//     lname: p1.lname,
//     address: p1.address  
// }

// let p2 = {
//     ...p1,  //shallow copy //spread operator
//     address: {
//         ...p1.address
//     }
// }

p2.fname = 'Piyush Garg'
p2.address.h = 'Hacked'

console.log(p2)
console.log(p1) 