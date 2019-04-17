console.log('hello');

const square = function (x) {
    return x * x;
};
const squareArrowFunction = (x) => {
    return x * x;
};
const squareArrowShort = (x) => x * x;

const getFirstName = (x) => {
    return x.split(" ")[0];
};
const getFirstNameShort = (x) => x.split(" ")[0];
const fullName = 'Kyle Townsend';
console.log(getFirstNameShort(fullName));
console.log(getFirstName(fullName));