import { useSelector } from "react-redux";
import { getAll } from "../redux/reducers/getAll";
import { getLimit } from "../redux/reducers/getLimit";
import { useStoreDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
// import { addProduct } from "../redux/products";

const PokeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage, setpokePerPage] = useState(20);
  const [currentPokeList, setcurrentPokeList] = useState([]);
  // const [lastPokeIndex, setLastPokeIndex] = useState(currentPage * pokePerPage);
  // const [fitstPokeIndex, setFitstPokeIndex] = useState(0);

  const lastPokeIndex = currentPage * pokePerPage;
  const fitstPokeIndex = lastPokeIndex - pokePerPage;

  const paginate = (pageNumber) => {
    // console.log(fitstPokeIndex);
    // console.log(lastPokeIndex);

    setCurrentPage(pageNumber);
    // setFitstPokeIndex(lastPokeIndex - pokePerPage);
    // setLastPokeIndex(currentPage * pokePerPage);
    // const actualList = allPokemon.slice(fitstPokeIndex, lastPokeIndex);
    // setcurrentPokeList(actualList);
    // console.log(fitstPokeIndex);
    // console.log(lastPokeIndex);
  };

  const dispatch = useStoreDispatch();

  const {
    poke: { count },
  } = useSelector((state) => state);
  const {
    poke: { allPokemon },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getLimit());
  }, [dispatch]);

  useEffect(() => {
    // dispatch(getLimit());
    // dispatch(getAll({ start: 1, end: 10 }));

    // console.log(count);
    dispatch(getAll(count));
  }, [dispatch]);

  useEffect(() => {
    console.log(allPokemon);

    if (allPokemon) {
      setcurrentPokeList(allPokemon.slice(fitstPokeIndex, lastPokeIndex));
    }
  }, [allPokemon]);

  console.log(currentPokeList);
  console.log(allPokemon);

  // if (allPokemon) {
  //   setcurrentPokeList(allPokemon.slice(fitstPokeIndex, lastPokeIndex));
  // }

  // const currentPokeList = allPokemon.slice(fitstPokeIndex, lastPokeIndex);

  // console.log(lastPokeIndex);
  // console.log(fitstPokeIndex);

  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(count / pokePerPage); i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <div className="container">
      {currentPokeList && (
        <div>
          {currentPokeList.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}

      <Pagination
        // pageNumbers={pageNumbers}
        pokePerPage={pokePerPage}
        count={count}
        paginate={paginate}
        setcurrentPokeList={setcurrentPokeList}
        lastPokeIndex={lastPokeIndex}
        fitstPokeIndex={fitstPokeIndex}
        allPokemon={allPokemon}

        // allPokemon={allPokemon}
      />
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
