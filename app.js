// import needed modules
let city = {
    name: '',
    climate: 'glacial',
    architecture: 'romantic',
    slogan: []
};


const cityBuilder = document.getElementById('city-builder');
const cityNameInput = cityBuilder.querySelector('input');
const [climateSelect, architectureSelect] = cityBuilder.querySelectorAll('select');
const sloganTextArea = cityBuilder.querySelector('textarea');
const [addSloganButton, addCityButton] = cityBuilder.querySelectorAll('button');

const cityDisplay = document.getElementById('city-display');
const cityNameDisplay = cityDisplay.querySelector('h2');
const [climateImage, architectureImage] = cityDisplay.querySelectorAll('img');
const sloganList = cityDisplay.querySelector('ul');


//Display Function
function displayBuilder() {
    cityNameInput.value = city.name;
    climateSelect.value = city.climate;
    architectureSelect.value = city.architecture;
}

//Event Listeners
cityNameInput.addEventListener('input', () => {
    city.name = cityNameInput.value;
    displayBuilder();
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayBuilder();
    displayCity();
});

architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayBuilder();
    displayCity();
});


addSloganButton.addEventListener('click', () => {
    handleAddSlogan();
});



function displayCity() {
    cityDisplay.classList.value = '';
    cityNameDisplay.textContent = city.name;
    sloganList.textContent = city.slogan;
    climateImage.src = 'assets/climates/' + city.climate + '.webp';
    architectureImage.src = 'assets/architecture/' + city.architecture + '.webp';
    cityDisplay.classList.add(climateSelect.value);
    cityDisplay.classList.add(architectureSelect.value);
}

function handleAddSlogan() {
    city.slogan.push(sloganTextArea.value);
    displaySlogans();
    sloganTextArea.value = '';
}

function displaySlogans() {
    sloganList.innerHTML = '';
    
    for (const slogan of city.slogan) {
        const li = document.createElement('li');
        li.textContent = slogan;
        sloganList.append(li);
    }
}

let cities = [];

addCityButton.addEventListener('click', () => {
    cities.push(city);
    displaySavedCities();

    city = getDefaultCity();
    displayBuilder();
    displayCity();
});

function getDefaultCity() {
    const defaultCity = {
        name: '',
        climate: 'glacial',
        architecture: 'romantic',
        slogan: []
    };
    return defaultCity;
}

const savedDisplay = document.getElementById('saved-display');
const cityTable = savedDisplay.querySelector('tbody');

function displaySavedCities() {

    cityTable.innerHTML = '';

    for (const city of cities) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${city.name}</td>
        <td>${city.climate}</td>
        <td>${city.architecture}</td>
        <td>${city.slogan.length}</td>`;

        cityTable.append(tr);
    }
}


// page load actions
displayBuilder();
displayCity();
