function sum() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

console.log(sum(1, 2, 50));


//...numbers has to be the last argument, cannot user multiple rests in a single function
function sumRest(...numbers) {
    return numbers.reduce((sum, current) => sum += current, 0);
};

console.log(sumRest(1, 2, 50));


// spread operator
const numbers = [1, 2, 3, 4, 5];

const names = ['Gabriel', 'Guaitanele', 'Niszczak'];
const moreNames = ['João', 'Maria', 'José'];

const allNames = [...names, ...moreNames];
console.log(allNames);

const carroJulia = {
    modelo: 'Gol',
    marca: 'VW',
    motor: 1.6
}

const carroMaria = { ...carroJulia, motor: 1.8 };

console.log(carroJulia);
console.log(carroMaria);

// desestruturação

// const motorMaria = carroMaria.motor;
const { motor: motorMaria } = carroMaria;
const { motor: motorJulia } = carroJulia;


// desestruturação em arrys.
const [name1, name2, ...otherNames] = allNames;

console.log(name1);
console.log(name2);

console.log(otherNames);



