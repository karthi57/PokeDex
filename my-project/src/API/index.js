
//----------------------< Getting ALL Pokemon From API >----------------------------

export const getAllPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    console.log(data);

    //-------------------------< Calling Inner API >-------------------------

    const detailedPokemonData = data.results.map(async (currentPokemon) => {
      const response2 = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${currentPokemon.name}/`
      );
      const singlePokemonDetails = await response2.json();
      return singlePokemonDetails;
      // setSinglePokemonData((prevList) => [...prevList, singlePokemonDetails]);
      // by using above method the app calls the api twice, so reapeted list of pokemons,app became heavy and got crashed again & again
    });

    //-------------< Callin Multiple promises using `Promise.all()` >-------------

    const detailedResponses = await Promise.all(detailedPokemonData);
    return detailedResponses;
  };