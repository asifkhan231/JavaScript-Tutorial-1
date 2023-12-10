//concat:-concat() joins two or more strings:
// The concat() method can be used instead of the plus operator. These two lines do the same:

let firstName = 'Asif';
let lastName = 'Khan';

console.log(firstName+" "+lastName);//Asif Khan

let fullName = firstName.concat(lastName);
console.log(fullName);//Asif Khan
