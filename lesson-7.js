const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

const deepEqual = (object1, object2) => {
    for (const property in object1) {
        if (object1[property].valueOf() === object2[property].valueOf()) {
            return deepEqual(object1[property], object2[property]);
        }
        if (!deepEqual(object1[property], object2[property])) {
            return false;
        }
    }
    return true;
}
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj2, obj3));
deepEqual(obj1, obj2); // true
deepEqual(obj1, obj3); // false