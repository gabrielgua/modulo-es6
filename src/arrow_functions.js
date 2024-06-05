const hello = () => 'Hello!';
console.log(hello());

const returnCar = () => ({
    model: 'Fiesta',
    manufacturer: 'Ford'
});

console.log(returnCar());

const carro = {
    velocidadeAtual: 40,

    acelerar: function() {
        this.velocidadeAtual += 10;
    },

    frear: function() {
        this.velocidadeAtual -= 10;
    }

    // this here is undefined
    // frear: () => {
    //     this.velocidadeAtual -= 10;
    // }
}

carro.acelerar();
console.log(carro);
