window.onload = () => {
setUpEventHandlers();
}

const setUpEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = () => {
  const currencyValue = document.querySelector('#currency-input').value;
  console.log(currencyValue)
}

const fetchCurrency = () => {
  const saveFetch = fetch(`https://api.exchangerate.host/latest`)
  .then((response) => response.json())
  .then((object) => {
    const rates = object.rates;
    const ratesEntries = Object.entries(rates)
    // console.log(ratesEntries);
    ratesEntries.forEach((entry) => {
      const currency = entry[0];
      const rates = entry[1];
      console.log(currency, rates);

      const currencyList = document.querySelector('#currency-list');
      const itenCurencyList = document.createElement('li');
      itenCurencyList.innerText = `${currency}: ${rates}`;
      console.log(itenCurencyList);
      currencyList.appendChild(itenCurencyList)
    })
  })
  .catch((error) => console.log(error, 'Solicitação falhou'))
}

fetchCurrency();