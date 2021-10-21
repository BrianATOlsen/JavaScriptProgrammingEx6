/*
 *  JavaScript Programming Exerice 6
 *  Arrays
 */
//Bracket Literal
let cars = ["Wrangler", "Forester", "Defender", "Land Cruiser"];
//Array Constructor
let makes = new Array("Jeep", "Subaru", "Land Rover", "Toyota");

let add = 'y';

let myNumbers = [];

while (add == 'y') {

    let number = prompt('Add a number to the array');

    if (number != '' && !isNaN(number)) {
        my.Numbers.push(number);
    }

    add = prompt('Continue to add numbers to my array?', 'y');
}