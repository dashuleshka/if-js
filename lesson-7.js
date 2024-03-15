const obj1 = {
    a: "a",
    b: {
        a: "a",
        b: "b",
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
        b: "b",
        a: "a",
    },
    a: "a",
};
const obj3 = {
    a: {
        c: {
            a: "a",
        },
        b: "b",
        a: "a",
    },
    b: "b",
};

const obj4 = {
    b: "b",
    a: {
        c: {
            a: "a",
        },
        b: "b",
        a: "a",
    },
};

const deepEqual = (object1, object2) => {
    if (Object.keys(object1).length !== Object.keys(object2).length) {  //проверка на одинаковое количество ключей
        return false;
    }
    for (const property in object1) {
        if (!(Object.prototype.hasOwnProperty.call(object1, property) && //если нет общего ключа, то false
            Object.prototype.hasOwnProperty.call(object2, property))) {
            return false;
        }

        if (object1[property] instanceof Object && object2[property] instanceof Object) { //если оба являются обьектами
            if (!deepEqual(object1[property], object2[property])) {
                return false
            }
        }

        //если примитив
        else if (object1[property] !== object2[property]) {
            return false;
        }
    }
    return true;
};


const obj5 = {a: 1, b: {c: 2}};
const obj6 = {a: 1, b: {c: 2}, d: 2};


console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj2, obj3));
console.log(deepEqual(obj4, obj3));
console.log(deepEqual(obj5, obj6));

//Calendar Month
const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4;

function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
    const calendarMas = [];
    let counter = 1;

    for (let i = 0; i < 5; i++) {
        calendarMas[i] = new Array();

        if (i === 0) {
            for (let j = dayOfWeek - 1; j >= 0; j--) {
                calendarMas[i][j] = daysInMonth;
                daysInMonth--;
            }

            for (let j = dayOfWeek; j < 7; j++) {
                calendarMas[i][j] = counter;
                counter++;
            }
        } else {
            for (let j = 0; j < 7; j++) {
                if (counter > 30) {
                    counter = 1;
                    calendarMas[i][j] = counter;
                }

                calendarMas[i][j] = counter;
                counter++;
            }
        }
    }
    return calendarMas;
}

console.log(getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek));