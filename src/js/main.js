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