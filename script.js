window.onload = () => {
setUpEventHandlers();
}

const setUpEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}

const handleSearchEvent = () => {
  const currencyValue = document.querySelector('#currency-input').value;
  clearList();
  fetchCurrency(currencyValue)
}

const fetchCurrency = (currency) => {
  const saveFetch = fetch(`https://api.exchangerate.host/latest?base=${currency}`)
  .then((response) => response.json())
  .then((object) => {
    baseCurrency(object.base)
    const rates = object.rates;
    const ratesEntries = Object.entries(rates)
    ratesEntries.forEach((entry) => {
      const currency = entry[0];
      const rates = entry[1];
      console.log(currency, rates);

      const currencyList = document.querySelector('#currency-list');
      const itenCurencyList = document.createElement('li');
      itenCurencyList.innerText = `${currency}: ${rates}`;
      console.log(itenCurencyList);
      currencyList.appendChild(itenCurencyList);
    })
  })
  .catch((error) => console.log(error, 'Solicitação falhou'))
}

const clearList = () => {
  const currencyList = document.querySelector('#currency-list');
  currencyList.innerHTML = "";
}

const baseCurrency = (base) => {
  const baseTitle = document.querySelector('#base');
  baseTitle.innerHTML = `Valores referentes a 1 ${base}`
};