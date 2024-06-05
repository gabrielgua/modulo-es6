const socials = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < socials.length; i++) {
    console.log(`Has a ${socials[i]} account.`);
}
socials.forEach(social => console.log(`Has a ${social} account.`));

const students = ['Gustavo', 'Júlia', 'Paula', 'Wagner'];
const studentsObject = students.map(student => {
    return {
        name: student,
        course: 'Frontend'
    }
})
console.log(studentsObject);


const numbers = [1, 2, 3, 4, 5];
const numbersDouble = numbers.map(number => number * 2);
console.log(numbersDouble);

const paula = studentsObject.find(student => student.name === 'Paula');
console.log(paula);

const paulaIndex = studentsObject.findIndex(student => student.name === 'Paula');
console.log(paulaIndex);

studentsObject.push({name: 'Gabriel', course: 'Backend'})

const everyFrontend = studentsObject.every(student => student.course === 'Frontend');
console.log(everyFrontend);

const someBackend = studentsObject.some(student => student.course === 'Backend'); // at least one of predicate
console.log(someBackend);

function backendFilter(student) {
    return student.course === 'Backend';
}

// const onlyBackends = studentsObject.filter(student => student.course === 'Frontend');
const onlyBackends = studentsObject.filter(backendFilter);
console.log(onlyBackends);

const nums = [10, 20, 30, 10];

const numsSum = nums.reduce((sum, current) =>  sum += current, 0);
console.log(numsSum);

const studentNames = studentsObject.reduce((names, student) => names += `${student.name} `, '');
console.log(studentNames);