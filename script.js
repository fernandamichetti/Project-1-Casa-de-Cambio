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
  .then((object) => console.log(object))
  .catch((error) => console.log(error, 'Solicitação falhou'))
}

fetchCurrency();