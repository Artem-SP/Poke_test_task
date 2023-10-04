import React from "react";

export default function Pagination({
  pokePerPage,
  count,
  paginate,
  setcurrentPokeList,
  allPokemon,
  fitstPokeIndex,
  lastPokeIndex,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(count / pokePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="!#"
              onClick={() => {
                paginate(number);
                setcurrentPokeList(
                  allPokemon.slice(fitstPokeIndex, lastPokeIndex)
                );
              }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
