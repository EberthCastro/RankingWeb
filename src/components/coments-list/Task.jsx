import { Box, Text, Datas } from "./ComentsListStyle";
import { Rating } from "@mui/material";
import React from "react";

function Task({ task }) {
  return (
    <Box>
      <Datas>
        <p>RATING ssss</p>
      </Datas>
      <Text>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </Text>
    </Box>
  );
}

export default Task;
