let pokemonRepository = (function(){
    //Array storing pokemon data
  let repository = [
      { name: "Ninetales", height: 1.1, type: ["Fire"], weight: 19.9 },
      { name: "Gengar", height: 1.5, type: ["Ghost", "Poison"], weight: 40.5 },
      { name: "Ponyta", height: 1, type: ["Fire"], weight: 30 },
      { name: "Dewgong", height: 1.7, type: ["Ice", "Water"], weight: 120 },
      { name: "Dragonair", height: 4, type: ["Dragon"], weight: 16.5 },
  ];
    //Function to add new pokemon to the repository
      function add(pokemon) {
          if (typeof pokemon === 'object'){
          repository.push(pokemon);
          }
      }
    //Function to return all repository objects
    function getAll() {
      return repository;
    }
    
    function addListItem(pokemon){
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
      button.addEventListener('click', function(){
        showDetails(pokemon);
      });
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails: showDetails,
    };
  })();
  
  console.log(pokemonRepository.getAll());
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });