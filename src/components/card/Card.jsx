import { React, useState } from "react";
import { App, Icon, TextContainer } from "./CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Card({ app }) {
  return (
    <>
      <App key={app.id}>
        <Link to={`/${app.id}`}>
          <Icon src={app.app_icon} alt="descr" />
        </Link>
        <TextContainer>
          <h3>
            <b>{app.app_name}</b>
          </h3>
          <span>{app.type}</span>
          <div className="star">
            <AiFillStar style={{ color: "#2670E0" }} />
            <span>
              <b>{app.rating.toString()}</b>
            </span>
          </div>
          
        </TextContainer>
      </App>
    </>
  );
}

export default Card;
