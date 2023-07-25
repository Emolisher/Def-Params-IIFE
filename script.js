'use strict';
//array that contains the bookings:
const bookings = [];

const createBooking = function (flightNum,
     numPassengers = 1, 
     price = 199 * numPassengers) {
    //whenever numPassengers is a falsy value (which undefined is) -> 1
   //ES 5 way of doing it:
    // numPassengers = numPassengers || 1;
    // price = price || 199;


    const booking = {
        flightNum, 
        //enhanced Object Literal Syntax (create property just by mentioning it)
        //no need to do flightNum: flightNum
        numPassengers,
        price
    }
console.log(booking);
bookings.push(booking);
};

createBooking('LH123');
createBooking('Lh123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
//if we want to skip a parameter (pax) - leave the argument undefined

//----------------------------------------------------------------
const flight = 'LH234';
const emil = {
    name: 'Emil Yordanov',
    passport: 387777672
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH99';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 387777672) {
        alert('Check in')
    }else { 
        alert('Wrong PSP')
    }
}

checkIn(flight, emil);
console.log(flight); //doesnt change - LH234
console.log(emil); //changes - Mr Emil Yordanov

//flight - primitive String - so flightNum is a copy of the original flight valu
//so the same as:  const flighNum = flight;
// flight num is a completely diff var - 
// value is simply copied

// emil - is an object -- when we pass a reference type to a function
// what is copied is the REFERENCE to the object in the memory heap
//same as:
// const passenger = emil
//whatever we change in a copy will also happen in the original

//THIS can have UNFORSEEABLE consquences, esp when working with mulitple developers

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(emil);
checkIn(flight, emil);

//now we have 2 fn manipulating the same object - we get 2 cHECKins

// In programming - 1. Passing by Values & 2. Passing by Reference
// IN JS we have only passing by Value
//we cant pass a refererence to a value & then it would change outside like in C++ for e.x.


// FIRST CLASS FUNCTIONS
// fn are 1st class citizens - treated as values
//fn are just another TYPE of object
// we can store them in var & OBJECT properties; pass them as values to other fn, wer can return a fn fm another fn
//we can even call methods on fn

//HIGHER ORDER - A FN that receives a FN as an argument or returns a new FN
//1. add event listener 
 

