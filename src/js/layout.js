import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home";
import { People } from "./views/people";
import { Vehicles } from "./views/vehicles";
import { Planets } from "./views/planets";
import { Favorites } from "./views/favorites";
import { PeopleDetails } from "./views/peopleDetails";
import { VehicleDetails } from "./views/vehicleDetails";
import { PlanetDetails } from "./views/planetDetails";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import SearchBar from "./views/SearchBar";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/people/:id" element={<PeopleDetails />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);