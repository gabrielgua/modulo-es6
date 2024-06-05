// maps
let map = new Map();
map.set('nome', 'Gabriel');
map.set('stack', 'java, spring');

console.log(map);

console.log(map.get('nome'));

console.log(map.size);
console.log(map.has('nome'));

// map.clear();
console.log(map.size);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
}

map.delete('stack');
console.log(map);


// set
const set = new Set();
set.add('12061003036');
set.add('13423404000');
set.add('81682323056');

console.log(set);

// same
console.log(set.keys());
console.log(set.values());

set.forEach(cpf => console.log(cpf));

const names = ['Gabriel', 'José', 'Paulo', 'Luana', 'Gabriel'];
console.log(names);
const namesSet = new Set([...names]);
console.log(namesSet);

const namesNoDuplicate = [...namesSet];
console.log(namesNoDuplicate);