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