import React, {
  // HashRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Browse from "./components/pages/Browse";
import SingleItem from "./components/pages/SingleItem";
import About from "./components/pages/About";
import Analizer from "./components/pages/Analizer";
import "./App.css";

import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Favorites from "./components/pages/Favorites";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavCountriesObjects,
  setFavorites,
} from "./features/countries/countriesSlice";
import { initializeCountries } from "./features/countries/countriesSlice";

const App = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCountries());

    if (countries) {
      const favCountries = countries.favoriteCountries;
      const allCountries = countries.countries;
      for (let countryIndex in allCountries) {
        const countryName = allCountries[countryIndex].name.common;
        for (let fav in favCountries) {
          const favCountry = favCountries[fav];
          if (favCountry === countryName) {
            dispatch(addFavCountriesObjects(allCountries[countryIndex]));
          }
        }
      }
    }

    const initialData = localStorage.getItem("favoriteCountries");
    let tempArray;
    if (initialData) {
      tempArray = initialData.split(",");
      dispatch(setFavorites(tempArray));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* <HashRouter> */}
      <Navbar
        bg="light"
        expand="lg"
        style={{
          width: "100vw",
        }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Countries App </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link to="home">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/browse">
                <Nav.Link>Browse</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Menu" id="basic-nav-dropdown">
                {/* <LinkContainer to="/favorites">
                  <NavDropdown.Item>Favorites</NavDropdown.Item>
                </LinkContainer> */}
                <NavDropdown.Divider />
                <LinkContainer to="/analizer">
                  <NavDropdown.Item>Data Analizer</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
