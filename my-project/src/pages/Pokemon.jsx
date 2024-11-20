import React, { useState, useEffect } from "react";
import { getAllPokemons } from "../API";
import PokeCard from "../components/PokeCard";
import { useNavigate, NavLink } from "react-router-dom";
import pokedexLogo from "../assets/PokeDexLogo.png";

function Pokemon() {
  

  const [singlePokemonData, setSinglePokemonData] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");

  //----------------------< Getting ALL Pokemon From API >------------------------

  useEffect(() => {
    getAllPokemons().then((detailedResponses) =>
      setSinglePokemonData(detailedResponses)
    );
  }, []);
  //console.log("PokeMOn data : ", singlePokemonData);

  //----------------------< Search Filter >----------------------------

  const searchData = singlePokemonData.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  //-----------------------------------<>----------------------------------------
    

  return (
    <>
      <header className="mt-4 ml-4">
        <img src={pokedexLogo} alt="" className="w-[10%]" />
      </header>
      <div className="flex justify-center p-1">
        <input
          type="text"
          className="input w-1/4 mb-4 p-4 text-black capitalize"
          placeholder="Search a Pokemon"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {/* BEFORE :  singlePokemonData.map((pokemon, index) => (
            AFTER : searchData.map((pokemon, index) =>
          */}
        {searchData.map((pokemon, index) => (
            <PokeCard
              key={index}
              imgUrl={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              types={pokemon.types}
              type={pokemon.types[0].type.name}
            />
         
          
        ))}
      </div>
    </>
  );
}

export default Pokemon;
