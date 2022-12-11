import { React, useState, useEffect } from "react";
import { App, Icon, TextContainer } from "../../components/card/CardStyle";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../navbar/Navbar";

function NewApps({baseImage,coments, deleteComent,e,index, setEditData}) {
  return (
    <>
    
      {coments?.map((e, index) => {
        return (
          <App key={index}>
            {/* <Link to={`/${app.id}`}> */}
            <Icon src={e.image} alt="descr" />
            {/* </Link> */}
            <TextContainer>
              <span>
                <b>{e.coment}</b>
              </span>
              <span>{e.type}</span>
              <div className="star">
                <AiFillStar style={{ color: "#2670E0" }} />
                <span>4,5</span>
              </div>
              <button
                  className="btn btn-outline-warning mx-1"
                  onClick={() => setEditData(e)}
                  >
                  Editar
                </button>
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() => deleteComent(e.id)}
              >
                Eliminar
              </button>
            </TextContainer>
          </App>
          );
        })}
    </>
  )
}

export default NewApps
