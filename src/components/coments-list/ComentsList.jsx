import React from "react";
import { Rating } from "@mui/material";
import { Box, ComentsContainer, Text, Datas } from "./ComentsListStyle";
import Appp from "./Appp";

function ComentsList({ coments, setEditData, deleteComent }) {
  return (
    <>
    {coments.length === 0 ? (
      <p>No Coments yet</p>
      ) : (
        coments.map((coment, index) => {
          return (
            <ComentsContainer>
            <Box key={index}>
              <Datas>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  style={{ color: "#2370E0" }}
                  precision={0.5}
                  readOnly
                  />
              </Datas>

              <Text>
                <h2>{coment.coment}</h2>
                <p>{coment.description}</p>
                <button
                  className="btn btn-outline-warning mx-1"
                  onClick={() => setEditData(coment)}
                  >
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger mx-1"
                  onClick={() => deleteComent(coment.id)}
                  >
                  Eliminar
                </button>
              </Text>
            </Box>
            </ComentsContainer>
          );
        })
        )}
        </>
  );
}

export default ComentsList;
