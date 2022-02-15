import './styles.scss';
import React from 'react';
import ButtonPage from './buttonPage.jsx';
import SpaceButton from './spaceButton.jsx';
import FaceOnSpaceman from './spaceGetRequests/faceOnSpaceManGet';
import Spaceman from './spaceGetRequests/spaceManGet.jsx';
import PicsButton from './PicsButton.jsx';
import NorthAmerica from './continents/northAmerica.jsx';
import SouthAmerica from './continents/southAmerica.jsx';
import Europe from './continents/europe.jsx';
import Asia from './continents/asia.jsx';
import Africa from './continents/africa.jsx';
import Australia from './continents/australia.jsx';
import Antarctica from './continents/antarctica.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Homepage() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ButtonPage />} />
        <Route exact path="/picButton" element={<PicsButton />} />
        <Route exact path="/spaceButton" element={<SpaceButton />} />
        <Route exact path="/spaceMan" element={<Spaceman />} />
        <Route exact path="/faceOnSpaceMan" element={<FaceOnSpaceman />} />
        <Route exact path="/nmurica" element={<NorthAmerica />} />
        <Route exact path="/smurica" element={<SouthAmerica />} />
        <Route exact path="/europe" element={<Europe/>} />
        <Route exact path="/asia" element={<Asia/>} />
        <Route exact path="/africa" element={<Africa/>} />
        <Route exact path="/australia" element={<Australia/>} />
        <Route exact path="/antarctica" element={<Antarctica/>} />
      
      </Routes>
    </BrowserRouter>
  )
}
