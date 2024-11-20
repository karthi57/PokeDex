import React from "react";
import {NavLink} from "react-router-dom"


function PokeCard({ imgUrl, name, type, types }) {
  const style = `p-[5px] capitalize text-xs rounded ${type} `

  return (
    <div className="box w-1/4 m-2 flex flex-col justify-center items-center ">
        <img src={imgUrl} className="w-1/2 h-1/2  " alt="pokemonImage"  />
        <h1 className="uppercase font-bold p-2">{name}</h1>
        {/* <div>
          {stats.map((stat, index) => (
                  <p key={index}>
                    {stat.stat.name} : {stat.base_stat}
                  </p>
                ))}
          </div> 
         <div className="flex gap-4 text-xs p-2 ">
          {types.map((type) => (
            <p className={style}>{type.type.name}</p>
          ))}
      
        </div> */}
        <p className={style} >{type}</p>
    </div>
  );
}

export default PokeCard;
