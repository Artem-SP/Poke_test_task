import { useEffect } from "react";

import "./App.css";
import { getLimit } from "./redux/reducers/getLimit";

import { useStoreDispatch } from "./redux/store";
import { useSelector } from "react-redux";

import PokeList from "./components/PokeList";

// import { getLimit } from "../redux/reducers/getLimit";
function App() {
  // const dispatch = useStoreDispatch();

  // const {
  //   poke: { count },
  // } = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(getLimit());
  // }, [dispatch]);

  return (
    <div className="App">
      <PokeList
      //  count={count}
      />
    </div>
  );
}

export default App;
