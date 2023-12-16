let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Modal
  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");
    //modalHeader.empty();
    modalTitle.empty();
    modalBody.empty();

    //creating element for modal name
    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    //creating element for modal height
    let contentElement = document.createElement('p');
    contentElement.innerText = 'Pokemon height' + ': ' + pokemon.height;

    //img for modal here
    let myImage = document.createElement('img');
    myImage.src = pokemon.imageUrl;

    //element for abilities in modal content
    modalBody.append(myImage);
    //modalBody.append(closeButtonElement);
    modalTitle.append(titleElement);
    modalBody.append(contentElement);
    $("#exampleModal").click(function(){
      $(button).toggle("modal");
    });
  }


  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    //creating li element inside the ul
    let listPokemon = document.createElement('li');
    //creating button element inside the li
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-primary'); // Bootstrap button classes
    listPokemon.classList.add("list-group-item"); //boostrap button list
    button.setAttribute("data-toggle", "modal"); //bootstrap button attr
    button.setAttribute("data-target", "#exampleModal"); //bootstrap button attr
    button.classList.add("btn", "btn-outline-info");
    listPokemon.append(button);
    pokemonList.append(listPokemon);
    button.addEventListener('click', () => showDetails(pokemon));
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            imageUrl: item.myImage,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded
  pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
  }); 
})