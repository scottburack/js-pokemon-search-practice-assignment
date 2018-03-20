document.addEventListener("DOMContentLoaded", function() {

  const pokemonSearchForm = document.getElementById('pokemon-search-form')
  const pokemonInput = document.getElementById('pokemon-search-input')
  const pokeContainer = document.getElementById('pokemon-container')
  const flipImageButton = document.querySelector('p')



  function parsePokemon() {
    return POKEMON.map(pokemonInfo => new Pokemon(pokemonInfo));
  }

  pokemonInput.addEventListener('keyup', function(event) {
    let displayedPokemon = []
    let parsedPokemon = parsePokemon()
    parsedPokemon.filter(function (pokemonInfo){
      if (pokemonInfo.name.includes(event.target.value)) {
        displayedPokemon.push(pokemonInfo)
      }
    })
    let template = ""
    for (let poke of displayedPokemon) {
      template += poke.render()
    }
    pokeContainer.innerHTML = template
    // pokeContainer.addEventListener('click', e => togglePokemon(e))
    let pokeImage = document.getElementsByClassName('poke-image')
    let pokeArray = Array.from(pokeImage)
    pokeArray.forEach(poke => {
      poke.addEventListener('click', e => togglePokemon(e))
    })
  })

  togglePokemon = (event) => {
    let pokeImageURL = event.target.src;
    let parsedPokemon = parsePokemon()
    let foundPokemon = parsedPokemon.find(function(pokemon){
      return pokeImageURL === pokemon.image || pokeImageURL === pokemon.backSprite
    })
    pokeImageURL === foundPokemon.image ? event.target.src = foundPokemon.backSprite : event.target.src = foundPokemon.frontSprite
  }




})
