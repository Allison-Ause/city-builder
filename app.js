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
const [addSloganButton, saveCityButton] = cityBuilder.querySelectorAll('button');

const cityDisplay = document.getElementById('city-display');
const cityNameDisplay = cityBuilder.querySelector('h2');
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

//sloganTextArea.addEventListener('input', () => {
//    city.slogan = sloganTextArea.value;
//});

addSloganButton.addEventListener('click', () => {
    handleAddSlogan();
});


function displayCity() {
    console.log(cityNameDisplay);
    cityNameDisplay.textContent = city.name;
    climateImage.src = 'assets/climates/' + city.climate + '.webp';
    architectureImage.src = 'assets/architecture/' + city.architecture + '.webp';
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

//create event listener for button (save city.slogan to array) for/of loop inside displayCity to display all the slogans



// state

// components
    // component
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic

// page load actions
displayBuilder();
displayCity();
