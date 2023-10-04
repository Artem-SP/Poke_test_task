import axios from "axios";

export const getLimitApi = () => {
  return (
    axios
      // .get("https://pokeapi.co/api/v2/pokemon?limit=5000")
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((responce) => responce.data.count)
  );
};
export const getPokeApi = (count) => {
  console.log(count);
  return (
    axios
      // .get("https://pokeapi.co/api/v2/pokemon?limit=5000")
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`)
      .then((responce) => {
        console.log(responce.data);
      })
  );
};
