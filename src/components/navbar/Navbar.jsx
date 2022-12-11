import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/ranking-app-logo-b.svg";
import SearchButton from '../searchButton/SearchButton';
import { Header } from './NavbarStyle';

function Navbar({
  renderAppsList,
  setRenderAppsList,
  originalDataOrder,
  setOriginalDataOrder,
}) {
  return (
    <Header>
      <Link to="/" >
        <img src={logo} alt="RankingApp logo" className="logo"/>
      </Link>
      <SearchButton
        renderAppsList={renderAppsList}
        setRenderAppsList={setRenderAppsList}
        originalDataOrder={originalDataOrder}
        setOriginalDataOrder={setOriginalDataOrder}
      />
    </Header>
  );
}

export default Navbar;
