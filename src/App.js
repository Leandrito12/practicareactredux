import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCharacters } from "./redux/Slices/CharactersSlice.js";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://finalspaceapi.com/api/v0/character")
      .then((response) => {
        dispatch(loadCharacters(response.data));
      })
      .catch();
  });
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/:id"} element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
