import React, { useEffect, useState } from "react";
import {
  ContainerImgApp,
  ContainerDataApp,
  ClasificationApp,
  TitleDataApp,
  IconEditApp,
  ContainerText,
  ContainerDataRanking,
  ContainerDataRankingLinear,
  ContainerInfoApp,
  RatingInfoApp,
  IconReturn,
  CoverSingle,
  MainContainer,
} from "./InfoAppStyle";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { Rating, LinearProgress} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Apps from "../../data/app.json";
import ComentsList from "../coments-list/ComentsList";
import ComentForm from "../coment-form/ComentForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";


function InfoApp() {
  // add coment CRUD
  const [editData, setEditData] = useState(null);
  const [coments, setComents] = useState(() => {
    const saveComents = window.localStorage.getItem("comentsData");
    if (saveComents) {
      return JSON.parse(saveComents);
    } else {
      return [];
    }
  });

  useEffect(() => {
   const savedcoment = window.localStorage.setItem("comentsData", JSON.stringify(coments));
   console.log(savedcoment)
  }, [coments]);

  // inserción de datos
  const addComent = (coment) => {
    setComents([...coments, coment]);
  };

  // editar un comentario
  const editComent = (coment) => {
    const newComents = coments.map((el) => (el.id === coment.id ? coment : el));
    setComents(newComents);
    setEditData(null);
  };

  // Eliminar un comentario
  const deleteComent = (id) => {
    const isDelete = window.confirm(
      `¿Deseas eliminar el registro con id: ${id}?`
    );

    if (isDelete) {
      const newComents = coments.filter((el) => el.id !== id);
      setComents(newComents);
    }
  };

  //Filter app by app-key
  const { id } = useParams();
  const FindApp = Apps.filter((apps) => apps.id === id);

  return (
    <>
      {FindApp.map((apps, index) => (
        <MainContainer key={index}>
          <IconReturn>
            <Link to="/">
              <FaArrowAltCircleLeft style={{ color: "#2370e0" }} className="faicon"/>
            </Link>
          </IconReturn>
          <ContainerImgApp>
            <img src={apps.photos[0]} alt="descr1" />
            <img src={apps.photos[2]} alt="descr2" />
            <img src={apps.photos[3]} alt="descr3" />
            <img src={apps.photos[4]} alt="descr4" />
          </ContainerImgApp>

          <ContainerDataApp>
            <CoverSingle>
              <div className="imgcoversingle">
                <img src={apps.app_icon} alt="" />
              </div>
              <TitleDataApp>
                <h2>{apps.app_name}</h2>
                <p>{apps.type}</p>
                <ClasificationApp>
                  <AiFillStar name="size-medium" style={{ color: "#2370e0" }} />
                  <span>
                    <b>{apps.rating}</b>
                  </span>
                </ClasificationApp>
              </TitleDataApp>
            </CoverSingle>

            <IconEditApp>
              <HiOutlineTrash style={{ color: "#2370e0" }} />
              <HiOutlinePencilAlt style={{ color: "#2370e0" }} />
            </IconEditApp>
          </ContainerDataApp>

          <ContainerInfoApp>
            <RatingInfoApp>
              <h3>Ratings and reviews</h3>
              <span>{apps.rating}</span>
              <ContainerDataRanking>
                <Rating
                  name="half-rating-read"
                  defaultValue={parseFloat(apps.rating)}
                  precision={0.1}
                  readOnly
                />
                <ContainerDataRankingLinear>
                  1<LinearProgress variant="determinate" value={1} />
                  2<LinearProgress variant="determinate" value={10} />
                  3<LinearProgress variant="determinate" value={50} />
                  4<LinearProgress variant="determinate" value={60} />
                  5<LinearProgress variant="determinate" value={95} />
                </ContainerDataRankingLinear>
              </ContainerDataRanking>
            </RatingInfoApp>

            <ContainerText>{apps.app_description}</ContainerText>
          </ContainerInfoApp>
          <h3>Comments</h3>
          
          <ComentsList coments={coments}
            setEditData={setEditData}
            deleteComent={deleteComent}/>
          
          <ComentForm addComent={addComent}
            editComent={editComent}
            editData={editData} />
          
        </MainContainer>
      ))}
    </>
  );
}

export default InfoApp;
