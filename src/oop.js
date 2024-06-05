class Pokemon {
    // name = '';
    // type = '';

    #hp = 100;

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    attack(name) {
        console.log(`${this.name} attacks using ${name}.`);
    }

    receivedDamage() {
        this.#hp -= 10;
    }

    getHp() {
        return this.#hp;
    }
}

class Pikachu extends Pokemon {
    constructor() { super('Pikachu', 'Eletric'); }

    attack() {
        console.log(`${this.name} attacks using Choque do trovão.`);
    }
} 

const pikachu = new Pikachu();

pikachu.receivedDamage();
console.log(`{ hp: ${pikachu.getHp()} }`);
pikachu.attack();



