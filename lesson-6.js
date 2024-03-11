const isPalindrome = word => word === word.split('').reverse().join('');

let str = 'шалаш';
console.log(isPalindrome(str));

//Поиск объектов размещения
const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];

const strOverlap = (hotels, searchValue) => {
    const findedHotels = [];

    hotels.forEach(({country, city, name}) => {
        if (country.includes(searchValue) || city.includes(searchValue) || name.includes(searchValue)) {
            findedHotels.push(`${country}, ${city}, ${name}`);
        }
    })

    return findedHotels;
};


console.log(strOverlap(hotels, 'UK'));

const name = 'Dasha';
const obj = {};
obj[name] = ['5'];
console.log(obj);

//Сопоставьте страны с городами из массива
const countryConnection = (data) => {
    const obj = {};
    data.forEach((hotel) => {
        if (hotel.country) {
            if (!obj[hotel.country]) {
                obj[hotel.country] = [hotel.city];
            }
        }
            else {
            obj[hotel.country] = obj[hotel.country].push(hotel.city);
            }
    });
    return obj;
};

console.log(countryConnection(hotels));

//Calendar test
const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 2; // в моем примере понедельник равен 0. У вас может отличаться

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
        }
        else {
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

console.log(getCalendarMonth(daysInMonth, daysInWeek,dayOfWeek));