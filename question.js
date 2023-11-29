// ?  array = [15,5,16,7,4,2,6,8,9,10]
//  make a new array of even integer

const array = [15, 5, 16, 7, 4, 2, 6, 8, 9, 10];

const evenArray = array.filter((num) => num % 2 == 0);
console.log(evenArray);

const doubleArray = array.map((num) => num * 2);
console.log(doubleArray);
