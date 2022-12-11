import React, { useState } from "react";
//Components
import Navbar from "../../components/navbar/Navbar";
import FilterTabs from "../../components/filter-tabs/FilterTabs";
import Card from "../../components/card/Card";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
//Datas (Json)
import Apps from "../../data/app.json";
//Router Dom
import { Link } from "react-router-dom";
//Styles
import { ContainerApps, IconAddApp } from "./HomeStyle";
//Icons
import { FaPlusCircle } from "react-icons/fa";

export default function Home() {
  // New array with ordered apps from higher to lower ranking value.
  const bestAppsList = Apps.filter((app) => app.rating >= 4).sort((a, b) =>
    a.rating > b.rating ? -1 : 1
  );
  const intermediateAppsList = [
    ...new Set(
      Apps.filter((app) => app.rating > 2 && app.rating < 4).sort((a, b) =>
        a.rating > b.rating ? -1 : 1
      )
    ),
  ];
  const worstAppsList = [
    ...new Set(
      Apps.filter((app) => app.rating <= 2).sort((a, b) =>
        a.rating > b.rating ? 1 : -1
      )
    ),
  ];

  //New array with all "Type" values and add "All" as a "Type" value.
  const allAppTypes = [...new Set(Apps.map((app) => app.type))];

  const [tabsFilterOrder, setTabsFilterOrder] = useState(Apps);
  const [originalDataOrder, setOriginalDataOrder] = useState(tabsFilterOrder);
  const [secondDataOrder, setSecondDataOrder] = useState(tabsFilterOrder);

  const [renderAppsList, setRenderAppsList] = useState(tabsFilterOrder); // Render

  return (
    <>
      <Navbar
        originalDataOrder={originalDataOrder}
        setOriginalDataOrder={setOriginalDataOrder}
        renderAppsList={renderAppsList}
        setRenderAppsList={setRenderAppsList}
        tabsFilterOrder={tabsFilterOrder}
        appTypes={allAppTypes}
      />
      {/* <Carousel bestAppsList={bestAppsList} /> */}

      <FilterTabs
        bestAppsList={bestAppsList}
        intermediateAppsList={intermediateAppsList}
        worstAppsList={worstAppsList}
        renderAppsList={renderAppsList}
        setRenderAppsList={setRenderAppsList}
        originalDataOrder={originalDataOrder}
        setOriginalDataOrder={setOriginalDataOrder}
        secondDataOrder={secondDataOrder}
        setSecondDataOrder={setSecondDataOrder}
      />
      
      <ContainerApps apps={renderAppsList}>
        {renderAppsList.map((app) => {
          return <Card key={app.app_id} app={app} />;
        })}
        
      </ContainerApps>
      <IconAddApp>
        <Link to="/createapp">
          <FaPlusCircle style={{ color: "#2370e0" }} />
        </Link>
      </IconAddApp>
      <Footer />
    </>
  );
}
