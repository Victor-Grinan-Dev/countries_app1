import React, {
  // HashRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/UIs/NavBar";
import Home from "./components/pages/Home";
import Browse from "./components/pages/Browse";
import SingleItem from "./components/pages/SingleItem";
import About from "./components/pages/About";
import Analizer from "./components/pages/Analizer";
import "./App.css";
import Favorites from "./components/pages/Favorites";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeCountries } from "./features/countries/countriesSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCountries());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* <HashRouter> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="about" element={<About />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="analizer" element={<Analizer />} />
        <Route path="browse/:single" element={<SingleItem />} />
      </Routes>
      {/* </HashRouter> */}
    </BrowserRouter>
  );
};

export default App;
