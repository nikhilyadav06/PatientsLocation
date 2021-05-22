const cities = {
    // bangalore: 15,
    // hyderabad: 5,
    // delhi: 2
};

let totalCities = 0;

for (let city in cities) {
    totalCities += cities[city];
}

const percentages = {};

for (let city in cities) {
    percentages[city] = Math.round(cities[city]/totalCities*100*100) / 100;
}

const dataUl = document.querySelector('.data-ul');

for (let city in cities) {
    let li = document.createElement('li');
    li.innerHTML = city.toUpperCase() + ' : ' + cities[city];
    dataUl.appendChild(li);
}

const percentCard = document.querySelector('.percent');

for (let city in percentages) {
    let div = document.createElement('div');
    div.classList.add('percent-card');
    let cityDiv = document.createElement('div');
    let percentDiv = document.createElement('div');
    cityDiv.innerHTML = city.toUpperCase();
    percentDiv.innerHTML = percentages[city] + '<span class="per-sign">%</span>';
    cityDiv.classList.add('city');
    percentDiv.classList.add('percentage');
    div.appendChild(percentDiv);
    div.appendChild(cityDiv);
    percentCard.appendChild(div);
}

const button = document.querySelector('#add');

button.addEventListener('click', () => {
    let inp = document.querySelector('#cityInput');
    newCity = inp.value;
    // console.log(newCity);
    if (newCity in cities) {
        // console.log('YES');
        cities[newCity] += 1;
        totalCities += 1;
    } else {
        // console.log('NO');
        cities[newCity] = 1;
        totalCities += 1;
    }

    for (let city in cities) {
        percentages[city] = Math.round(cities[city]/totalCities*100*100) / 100;
    }

    dataUl.innerHTML = '';
    for (let city in cities) {
        let li = document.createElement('li');
        li.innerHTML = city.toUpperCase() + ' : ' + cities[city];
        dataUl.appendChild(li);
    }

    percentCard.innerHTML = '';
    for (let city in percentages) {
        let div = document.createElement('div');
        div.classList.add('percent-card');
        let cityDiv = document.createElement('div');
        let percentDiv = document.createElement('div');
        cityDiv.innerHTML = city.toUpperCase();
        percentDiv.innerHTML = percentages[city] + '<span class="per-sign">%</span>';
        cityDiv.classList.add('city');
        percentDiv.classList.add('percentage');
        div.appendChild(percentDiv);
        div.appendChild(cityDiv);
        percentCard.appendChild(div);
    }
});

const infoButton = document.querySelector('#info');

infoButton.addEventListener('click', () => {
    let formSection = document.querySelector('.form-section');
    let dataSection = document.querySelector('.data-section');
    let infoSection = document.querySelector('.info-section');
    formSection.classList.toggle('hide');
    dataSection.classList.toggle('hide');
    infoSection.classList.toggle('hide');
});