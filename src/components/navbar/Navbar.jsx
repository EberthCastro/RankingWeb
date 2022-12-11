import React from 'react';
import SearchButton from '../searchButton/SearchButton';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/ranking-app-logo-b.svg";
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
        <img src={Logo} alt="RankingApplogo" className="logo"/>
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
