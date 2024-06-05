function iterate() {
    let times = 0;
    for (let i = 0; i < 1000000000; i++) {
        times++;
    }
    return times;
}

const iteratePromise = new Promise((resolve, reject) => {
    try {
        let times = 0;
        for (let i = 0; i < 1000000000; i++) {
            timess++;
        }
        resolve(times);
    } catch(e) {
        reject('Error while iterating');
    }
});

async function print() {
    console.log('start');

    // await iteratePromise
    //     .then(times => console.log(times))
    //     .catch(e => console.log(e));
    authenticate('gabrielgua', '123123')
        .then(result => console.log(result));

    try {
        const result = await iteratePromise;
        console.log(result);
    } catch (e) {
        console.log(e);
    }

    console.log('finished');
}

const authenticate = (login, pass) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`User ${login} is now authenticated.`);
        }, 3000);
    })
}

print();


