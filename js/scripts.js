let pokemonRepository = (function(){
let pokemonList = [
    { name: 'Ninetales', height: 1.1, type: ['Fire'], weight: 19.9 },
    { name: 'Gengar', height: 1.5, type: ['Ghost', 'Poison'], weight: 40.5 },
    { name: 'Ponyta', height: 1, type: ['Fire'], weight: 30 },
    { name: 'Dewgong', height: 1.7, type: ['Ice', 'Water'], weight: 120 },
    { name: 'Dragonair', height: 4, type: ['Dragon'], weight: 16.5 }
];

return {
    getAll: function() {
        return pokemonList;
    },
    add: function(item) {
        pokemonList.push(item);
    }
}
})();

pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height > 1) {
        document.write (pokemon.name + " " + "(height: "  + pokemon.height +  " ) " + "-Wow. That's big!" + "<br>");
    }else {
        document.write (pokemon.name + " " + "(height: " + pokemon.height + " ) " + "<br>");
    }
    });