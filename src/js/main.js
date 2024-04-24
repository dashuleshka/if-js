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


const slider = document.getElementById('hotels-block');
const createHomesBlock = (data) => {
    const hotelItemsTemplate = data.map(({id, name, city, country, imageUrl}) =>
        `<div id=${id} class="hotels-block__item">
            <div>
              <img
                src=${imageUrl}
                alt="Hotel image"
              />
            </div>
            <span class="hotels-block__item--typography-subtitle">
              ${name}</span
            >
            <span class="hotels-block__item--location"
              >${city}, ${country}</span
            >
          </div>`,
    ).join(' ')
    slider.innerHTML = `<div class="container hotels-block__guests-loves-padding">
        <h2 class="hotels-block__heading">Homes guests loves</h2>
        <div class="hotels-block__content">
        ${hotelItemsTemplate}
        </div>
        </div>`
}

createHomesBlock(data);

//lesson-11
// const adultEl = document.getElementById('adults');
// const childrenEl = document.getElementById('children');
// const roomsEl = document.getElementById('rooms');
// const decrEl1 = document.getElementById('decr-1');
// const incrEl1 = document.getElementById('incr-1');
// const incrEl2 = document.getElementById('incr-2');
// const decrEl2 = document.getElementById('decr-2');
// const decrEl3 = document.getElementById('decr-3');
// const incrEl3 = document.getElementById('incr-3');
// const filterPositionsBlock = document.querySelector('.filter-block')
// const additionalBlock = document.querySelector('.block-2');
// const inputBookingPositions = document.getElementById('booking-positions');
//
// let numberAdults = 1;
// let numberRooms = 1;
// let numberChildren = 0;
//
// function filterIncrement(category) {
//     return function () {
//         if (category === adultEl && numberAdults >= 1 && numberAdults < 30) {
//             numberAdults++;
//             category.innerHTML = numberAdults.toString();
//         }
//         if (category === roomsEl && numberRooms >= 1 && numberRooms < 30) {
//             numberRooms++;
//             category.innerHTML = numberRooms.toString();
//         }
//         if (category === childrenEl && numberChildren >= 0 && numberChildren < 10 && category === childrenEl) {
//             numberChildren++;
//             category.innerHTML = numberChildren.toString();
//             additionalBlock.style.cssText = `
//             display: flex;
//             display: visible;`
//         }
//     }
// }
//
// function filterDecrement(category) {
//     return function () {
//         if (category === adultEl && numberAdults > 1 && numberAdults < 31) {
//             numberAdults--;
//             category.innerHTML = numberAdults.toString();
//         }
//         if (category === roomsEl && numberRooms > 1 && numberRooms < 31) {
//             numberRooms--;
//             category.innerHTML = numberRooms.toString();
//         }
//         if (category === childrenEl && numberChildren > 0 && numberChildren < 11) {
//             numberChildren--;
//             category.innerHTML = numberChildren.toString();
//             if (numberChildren === 0) {
//                 additionalBlock.style.cssText = `
//             display: flex;
//             display: none;`
//             }
//         }
//     }
// }
//
// inputBookingPositions.addEventListener('click', () => {
//     filterPositionsBlock.style.cssText = `
//     visibility: visible;
//     `
// })
// incrEl1.addEventListener('click', filterIncrement(adultEl));
// decrEl1.addEventListener('click', filterDecrement(adultEl));
// incrEl2.addEventListener('click', filterIncrement(childrenEl));
// decrEl2.addEventListener('click', filterDecrement(childrenEl));
// incrEl3.addEventListener('click', filterIncrement(roomsEl));
// decrEl3.addEventListener('click', filterDecrement(roomsEl));
