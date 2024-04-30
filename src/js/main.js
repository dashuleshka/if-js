const data = [
  {
    id: "71ce9eac-e9b9-44f0-a342-9ff0b565f3b7",
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg",
  },
  {
    id: "aa560608-a879-48a7-80b6-deff2806b250",
    name: "Apartment Sunshine",
    city: "Santa  Cruz de Tenerife",
    country: "Spain",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg",
  },
  {
    id: "1d88fefe-edf1-4cda-844a-babbf29bb2b3",
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg",
  },
  {
    id: "a2bf824d-edd8-41f0-8b70-244334086ab4",
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg",
  },
];

const hotelsContainer = document.getElementById("hotels-block");
const createHomesBlock = (data) =>
  data
    .map(
      ({ id, name, city, country, imageUrl }) =>
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
    )
    .join(" ");

hotelsContainer.innerHTML = `<div class="container hotels-block__guests-loves-padding">
        <h2 class="hotels-block__heading">Homes guests loves</h2>
        <div class="hotels-block__content">
        ${createHomesBlock(data)}
        </div>
        </div>`;