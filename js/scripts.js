let pokemonList = [
    {name: 'Ninetales', height: 1.1, type: ['Fire'], weight: 19.9},

    {name: 'Gengar', height: 1.5, type: ['Ghost', 'Poison'], weight: 40.5},

    {name: 'Ponyta', height: 1, type: ['Fire'], weight: 30},

    {name: 'Dewgong', height: 1.7, type: ['Ice', 'Water'], weight: 120},

    {name: 'Dragonair', height: 4, type: ['Dragon'], weight: 16.5}
];

for(let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height>1)
    {document.write(pokemonList[i].name + " " + "(height:"+ " "+ pokemonList[i].height + " ) " + "- Wow. That\'s Big!"+ "<br>") //condition indicates pokemon with # > 1 height

} else 
{document.write(pokemonList[i].name + " " + "(height:" + " " + pokemonList[i].height + " ) " + "<br>"); } //condition leaves no message when pokemon height is # < 1 height
}