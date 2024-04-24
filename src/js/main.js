const data = [
    {
        id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        id: 'aa560608-a879-48a7-80b6-deff2806b250',
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
];


data.forEach((dataItem) => {
    const blockEl = document.querySelector('.hotels-block__content');
    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const image = document.createElement('img');
    const newSpan1 = document.createElement('span');
    const newSpan2 = document.createElement('span');

    const textSpan1 = document.createTextNode(dataItem.name);
    const textSpan2 = document.createTextNode(dataItem.city + ', ' + dataItem.country)

    newDiv1.className = "hotels-block__item";
    newDiv1.setAttribute('id', dataItem.id);
    newDiv1.appendChild(newDiv2);

    newDiv2.appendChild(image);
    image.setAttribute('src', dataItem.imageUrl);
    image.setAttribute('alt', dataItem.name);

    newSpan1.className = "hotels-block__item--typography-subtitle"
    newSpan1.appendChild(textSpan1);

    newSpan2.className = "hotels-block__item--location"
    newSpan2.appendChild(textSpan2);

    newDiv1.appendChild(newSpan1);
    newDiv1.appendChild(newSpan2);
    blockEl.appendChild(newDiv1);
})

//lesson-11
const adultEl = document.getElementById('adults');
const childrenEl = document.getElementById('children');
const roomsEl = document.getElementById('rooms');
const decrEl1 = document.getElementById('decr-1');
const incrEl1 = document.getElementById('incr-1');
const incrEl2 = document.getElementById('incr-2');
const decrEl2 = document.getElementById('decr-2');
const decrEl3 = document.getElementById('decr-3');
const incrEl3 = document.getElementById('incr-3');
const filterPositionsBlock = document.querySelector('.filter-block')
const additionalBlock = document.querySelector('.block-2');
const inputBookingPositions = document.getElementById('booking-positions');

let numberAdults = 1;
let numberRooms = 1;
let numberChildren = 0;

function filterIncrement(category) {
    return function () {
        if (category === adultEl && numberAdults >= 1 && numberAdults < 30) {
            numberAdults++;
            category.innerHTML = numberAdults.toString();
        }
        if (category === roomsEl && numberRooms >= 1 && numberRooms < 30) {
            numberRooms++;
            category.innerHTML = numberRooms.toString();
        }
        if (category === childrenEl && numberChildren >= 0 && numberChildren < 10 && category === childrenEl) {
            numberChildren++;
            category.innerHTML = numberChildren.toString();
            additionalBlock.style.cssText = `
            display: flex;
            display: visible;`
        }
    }
}

function filterDecrement(category) {
    return function () {
        if (category === adultEl && numberAdults > 1 && numberAdults < 31) {
            numberAdults--;
            category.innerHTML = numberAdults.toString();
        }
        if (category === roomsEl && numberRooms > 1 && numberRooms < 31) {
            numberRooms--;
            category.innerHTML = numberRooms.toString();
        }
        if (category === childrenEl && numberChildren > 0 && numberChildren < 11) {
            numberChildren--;
            category.innerHTML = numberChildren.toString();
            if (numberChildren === 0) {
                additionalBlock.style.cssText = `
            display: flex;
            display: none;`
            }
        }
    }
}

inputBookingPositions.addEventListener('click', () => {
    filterPositionsBlock.style.cssText = `
    visibility: visible;
    `
})
incrEl1.addEventListener('click', filterIncrement(adultEl));
decrEl1.addEventListener('click', filterDecrement(adultEl));
incrEl2.addEventListener('click', filterIncrement(childrenEl));
decrEl2.addEventListener('click', filterDecrement(childrenEl));
incrEl3.addEventListener('click', filterIncrement(roomsEl));
decrEl3.addEventListener('click', filterDecrement(roomsEl));
