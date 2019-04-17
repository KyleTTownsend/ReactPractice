
const add = function(a, b) {
    console.log(arguments);
    return a + b;
};
const addArrow = (x) => {
    return x;
};

const user = {
    name: 'Kyle',
    cities: ['Toronto', 'Houston', 'New York'],
    printPlacesLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

const multiplier = {
    numbers: [ 1, 2, 3, 4],
    multiply: 5,
    multiplyBy() {
        return this.numbers.map((num) => num * this.multiply);
    }
};

console.log(addArrow(5));
console.log(multiplier.multiplyBy());