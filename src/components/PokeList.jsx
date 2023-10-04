import { useSelector } from "react-redux";
import { getAll } from "../redux/reducers/getAll";
import { getLimit } from "../redux/reducers/getLimit";
import { useStoreDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
// import { addProduct } from "../redux/products";

const PokeList = ({ count }) => {
  console.log(count);

  const pokePerPage = 50;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPokeList, setCurrentPokeList] = useState([]);
  const [lastPokeIndex, setLastPokeIndex] = useState(pokePerPage);
  const [searchValue, setSearchValue] = useState("");

  const fitstPokeIndex = lastPokeIndex - pokePerPage;

  // const lastPokeIndex = currentPage * pokePerPage;

  const dispatch = useStoreDispatch();

  // const {
  //   poke: { count },
  // } = useSelector((state) => state);
  const {
    poke: { allPokemon },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getLimit(count));
  }, [dispatch]);

  useEffect(() => {
    // dispatch(getLimit());
    // dispatch(getAll({ start: 1, end: 10 }));

    // console.log(count);
    dispatch(getAll(count));
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      setCurrentPokeList(allPokemon.slice(fitstPokeIndex, lastPokeIndex));
    }
  }, [allPokemon]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      lastPokeIndex + pokePerPage < count
    ) {
      setLastPokeIndex((prev) => prev + pokePerPage);

      setCurrentPokeList(allPokemon.slice(0, fitstPokeIndex + lastPokeIndex));
    }
  };

  const handleSearch = (e) => {
    let filteredPoke = allPokemon.filter((poke) => {
      return poke.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });

    setCurrentPokeList(filteredPoke);
  };

  console.log(allPokemon);

  return (
    <div className="container">
      <div>
        <form action="">
          <input type="text" name="" id="" onChange={(e) => handleSearch(e)} />
        </form>
      </div>
      {currentPokeList && (
        <div>
          {currentPokeList.map((item) => (
            <div key={item.name}>{item.name}</div>
          ))}
        </div>
      )}

      {/* <Pagination
        pokePerPage={pokePerPage}
        count={count}
        paginate={paginate}
        setCurrentPokeList={setCurrentPokeList}
        lastPokeIndex={lastPokeIndex}
        fitstPokeIndex={fitstPokeIndex}
        allPokemon={allPokemon}

        // allPokemon={allPokemon}
      /> */}
      {/* 
      <button
        onClick={() => {
          dispatch(
            addProduct({
              title: "New product",
            })
          );
        }}
      >
        Add
      </button> */}
    </div>
  );
};

export default PokeList;
