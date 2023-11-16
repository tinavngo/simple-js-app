let pokemonRepository = (function () {
  //Array storing pokemon data
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

  //Function to add new pokemon to the repository
  function add(pokemon) {
    if (typeof pokemon === 'object') {
      repository.push(pokemon);
    }
  }
  //Function to return all repository objects
  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    //Created li inside of the ul element
    let listPokemon = document.createElement('li');
    //Created button element
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    //Appended button to li
    listPokemon.appendChild(button);
    //Appended li to ul
    pokemonList.appendChild(listPokemon);
    //Added eventListener to button, showDetails function is activated when clicked
    button.addEventListener('click', function () {
      showDetails(pokemon);
    //Returns showDetails in console when you click a Pokemon
    button.addEventListener("click", function(event){
      showDetails(pokemon);
    })
    });
  }

  //loadList and loadDetails converts apiUrl into JSON format
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }


  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

    //this function will log details of pokemon from loadList()
    function showDetails(pokemon) {
      pokemonRepository.loadDetails(item).then(function(){
      console.log(pokemon);
      });
    }

  //Returns loadDetails() and passes function through console log (eventListener 'clicked' is implemented in addListItem)
  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
      console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails:loadDetails,
    showDetails:showDetails,
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});

//creating modal here
function showModal(title, text) {
  let modalContainer = document.querySelector('#modal-container');

  // Clear all existing modal content
  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  // Add the new modal content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';

  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);



  modalContainer.classList.add('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Modal title', 'This is the modal content!');
});