const hotelsContainer = document.getElementById("homes-block__content");
const availableHotels = document.getElementById(
  "available-hotels__block--content",
);
const availableHotelsBlock = document.getElementById("available-hotels");

const createHotelsMarkup = (data) =>
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
            ${name}
          </span>
          <span class="hotels-block__item--location">
            ${city}, ${country}
          </span>
        </div>`,
    )
    .join(" ");


// const getPopularHotels = async () => {
//   if (!sessionStorage.getItem('hotel')) {
//     try {
//       const response = await fetch("https://if-student-api.onrender.com/api/hotels/popular",
//       );
//       const data = await response.json();
//       const dataSort = bubbleStringSort(data, 'name');
//       hotelsContainer.innerHTML = createHotelsMarkup(dataSort);
//
//       const dataString = JSON.stringify(dataSort);
//       sessionStorage.setItem("hotel", dataString); //writing data in sessionStorage
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
//   else {
//     const dataStringFromStorage = sessionStorage.getItem("hotel");
//     const dataFromStorage = JSON.parse(dataStringFromStorage);
//     hotelsContainer.innerHTML = createHotelsMarkup(dataFromStorage);
//   }
//
// };

const getPopularHotels = async () => {
  if (!sessionStorage.getItem("hotel")) {
    try {
      const response = await fetch(
        "https://if-student-api.onrender.com/api/hotels/popular",
      );
      const data = await response.json();
      const dataSort = bubbleStringSort(data, "name");
      hotelsContainer.innerHTML = createHotelsMarkup(dataSort);

      const dataString = JSON.stringify(dataSort);
      sessionStorage.setItem("hotel", dataString); //writing data in sessionStorage
    } catch (error) {
      console.log(error.message);
    }
  } else {
    const dataSort = JSON.parse(sessionStorage.getItem("hotel"));
    hotelsContainer.innerHTML = createHotelsMarkup(dataSort);
  }
};

getPopularHotels();

// GET-filter
const form = document.getElementById("my-form");
const searchInput = document.getElementById("country-desktop");
const formButton = document.getElementById("form-button");
const url = new URL("https://if-student-api.onrender.com/api/hotels");

const noAvailableTemp = document.getElementById("no-available");

formButton.disabled = true;
searchInput.addEventListener("input", () => {
  formButton.disabled = !searchInput.value.length;
});

function findChildrenAges() {
  let arr = [];
  document.querySelectorAll("#options-child-age").forEach((dataAge) => {
    arr.push(dataAge.value);
  })

  return arr.join(',');
}

function bubbleStringSort(array, field) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j][field].localeCompare(array[j + 1][field]) > 0) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

const searchPopularHotels = async () => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    url.searchParams.set("search", `${searchInput.value}`);
    url.searchParams.set("adults", `${optionsData["adults"].value}`);
    url.searchParams.set("children", `${findChildrenAges()}`);
    url.searchParams.set("rooms", `${optionsData["rooms"].value}`);

    try {
      const response = await fetch(decodeURIComponent(url));
      const data = await response.json();
      availableHotels.innerHTML = createHotelsMarkup(data);

      if (!data.length) {
        availableHotelsBlock.classList.remove("hidden-class");
        noAvailableTemp.classList.replace("hidden-class", "visible-class");
      } else {
        noAvailableTemp.classList.add("hidden-class");
        availableHotelsBlock.classList.remove("hidden-class");
      }
    } catch (error) {
      alert(`Error fetching data: ${error.message}`);
    }
  });
}
searchPopularHotels();

//Filters
const optionsData = {
  adults: { min: 1, max: 30, value: 1 },
  children: { min: 0, max: 10, value: 0 },
  rooms: { min: 1, max: 30, value: 1 },
};

const capitalizeLetter = (word) =>
  word[0].toUpperCase() + word.slice(-word.length + 1);

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
    document
      .getElementById(`options-plus-button-${option}`)
      .addEventListener("click", () => plusOne(option));
    document
      .getElementById(`options-minus-button-${option}`)
      .addEventListener("click", () => minusOne(option));
  });
};

const plusOne = (optionName) => {
  if (optionsData[optionName].value < optionsData[optionName].max) {
    optionsData[optionName].value++;

    if (optionName === "children") {
      addChildrenAge();
    }
  }

  if (optionsData[optionName].value === optionsData[optionName].max) {
    document
      .getElementById(`options-plus-button-${optionName}`)
      .setAttribute("disabled", "disabled");
  }

  if (optionsData[optionName].value > optionsData[optionName].min) {
    document
      .getElementById(`options-minus-button-${optionName}`)
      .removeAttribute("disabled");
  }

  if (optionsData.children.value === 1) {
    addChildrenAgeQuestion();
  }

  refreshOptionCounter(optionName);
};

const minusOne = (optionName) => {
  if (optionsData[optionName].value > optionsData[optionName].min) {
    optionsData[optionName].value--;
    if (optionName === "children") {
      removeChildrenAge();
    }
  }

  if (optionsData[optionName].value === optionsData[optionName].min) {
    document
      .getElementById(`options-minus-button-${optionName}`)
      .setAttribute("disabled", "disabled");
  }
  if (optionsData[optionName].value < optionsData[optionName].max) {
    document
      .getElementById(`options-plus-button-${optionName}`)
      .removeAttribute("disabled");
  }

  if (optionsData.children.value === 0) {
    removeChildrenAgeQuestion();
  }

  refreshOptionCounter(optionName);
};

const refreshOptionCounter = (optionName) => {
  const optionNumber = document.getElementById(
    `options-counter-number-${optionName}`,
  );
  optionNumber.textContent = optionsData[optionName].value;
};

const addChildrenAgeQuestion = () => {
  const optionsTextDiv = document.getElementById("options-text-div");
  optionsTextDiv.innerHTML = `
    <span class="options-text" id="options-text">What is the age of the child you’re travelling with?</span>
  `;
};

const removeChildrenAgeQuestion = () => {
  const optionsTextDiv = document.getElementById("options-text-div");
  optionsTextDiv.innerHTML = ``;
};

const addChildrenAge = () => {
  const ageChildrenBlock = document.getElementById("options-select-items");
  const ageOptions = [...Array(18)]
    .map((_, index) => `<option value=${index}>${index} years old</option>`)
    .join("");

  ageChildrenBlock.innerHTML += `<div class="options-select-item"><select id="options-child-age" class="options-child-age-select" 
  name="options-child-age">${ageOptions}</select></div>`;
};

const removeChildrenAge = () => {
  const ageChildrenBlock = document.getElementById("options-select-items");
  const lastSelectItem = document.querySelector(
    ".options-select-item:last-child",
  );
  ageChildrenBlock.removeChild(lastSelectItem);
};

filterWrapper.addEventListener("click", createOptionsDiv);
