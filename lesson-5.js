function dateConverting(date) {
    let dateRegex = /(\d{4})-(\d{2})-(\d{2})/
    return (date.replace(dateRegex, '$3.$2.$1'));
}

let date1 = '2024-02-20';
console.log(dateConverting(date1));

// 6-task
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

function strOverlap(str) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].country === str || data[i].city === str || data[i].hotel === str) {
            return data[i];
        }
    }
    return 0;
}

let str1 = 'Villa Kunerad';
console.log(strOverlap(str1));