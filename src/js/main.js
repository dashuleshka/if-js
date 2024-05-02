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

//Filters
const optionsData = {
  adults: { min: 1, max: 30, value: 1 },
  children: { min: 0, max: 10, value: 0 },
  rooms: { min: 1, max: 30, value: 1 },
};

const filterWrapper = document.getElementById("filter-wrapper");

const createOptionsDiv = () => {
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");
  optionsDiv.setAttribute("id", "options");
  optionsDiv.innerHTML = `<div class="options-items" id="options-items"></div>
      <div class="options-text-div" id="options-text-div"></div>
      <div class="options-select-items" id="options-select-items"></div>`;
  filterWrapper.appendChild(optionsDiv);
  createOptions();
  filterWrapper.removeEventListener("click", createOptionsDiv);
};

const createOptions = () => {
  const optionsItems = document.getElementById("options-items");
  Object.keys(optionsData).forEach((option) => {
    const optionsItem = document.createElement("div");
    optionsItem.classList.add("optionsItem");
    optionsItem.innerHTML = `
        <div class="options-description-text">
          <span>${capitalizeLetter(option)}</span>
        </div>
        <div class="options-item-buttons">
          <button class="options-button options-minus-button_js" id="options-minus-button-${option}" type="button" >—</button>
          <span class="options-counter-number" id="options-counter-number-${option}">${optionsData[option].value}</span>
          <button class="options-button options-plus-button_js" id="options-plus-button-${option}" type="button">+</button>
        </div>
      `;
    optionsItems.appendChild(optionsItem);
    document.getElementById(`options-plus-button-${option}`).addEventListener('click',() =>
        plusOne(option));
    document.getElementById(`options-minus-button-${option}`).addEventListener('click', () =>
      minusOne(option));
  });
};

const plusOne = (optionName) => {
  if (optionsData[optionName].value < optionsData[optionName].max) {
    optionsData[optionName].value++;
  }
  if (optionsData[optionName].value === optionsData[optionName].max) {
    document.getElementById(`options-plus-button-${optionName}`).setAttribute('disabled', 'disabled');
  }
  refreshOptionCounter(optionName);
}

const minusOne = (optionName) => {
  if (optionsData[optionName].value  > optionsData[optionName].min) {
    optionsData[optionName].value--;
  }
  if (optionsData[optionName].value === optionsData[optionName].min) {
    document.getElementById(`options-minus-button-${optionName}`).setAttribute('disabled', 'disabled')
    refreshOptionCounter((optionName));
  }
}

const refreshOptionCounter = (optionName) => {
  const optionNumber = document.getElementById(
      `options-counter-number-${optionName}`,
  );
  optionNumber.textContent = optionsData[optionName].value;
}

const capitalizeLetter = (word) => {
  return  word[0].toUpperCase() + word.slice(-word.length + 1);
}

filterWrapper.addEventListener("click", createOptionsDiv);

