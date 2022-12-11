import { React, useState, useEffect } from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { Rating } from "@mui/material";
import {
  FormContainer,
  FormInput,
  Input,
} from "../coment-form/ComentFormStyle";

function Header({ addComent, editComent, editData }) {
  const [formData, setFormData] = useState({
    coment: "",
    description: "",
    id: null,
  });

  useEffect(() => {
    if (editData !== null) {
      setFormData(editData);
    } else {
      setFormData({
        coment: "",
        description: "",
        id: null,
      });
    }
  }, [editData]);

  function handleSubmit(e) {
    e.preventDefault(); // Evitar que se recarge la página

    if (formData.coment !== "" && formData.description !== "") {
      if (editData !== null) {
        editComent(formData);
      } else {
        formData.id = crypto.randomUUID();
        addComent(formData);
        setFormData({
          coment: "",
          description: "",
          id: null,
        });
      }
    } else {
      alert("Por favor agrega tu nombre y una descripción.");
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  // const [ title, setTitle ] = useState('')
  // const [ description, setDescription ] = useState('')

  // function handleSubmit(event){
  //     event.preventDefault()

  //     onAddTask(title)
  //     onAddTask(description)

  //     setTitle('')
  //     setDescription('')
  // }
  // function handleSubmitdesc(event){
  //     event.preventDefault()

  //     onAddTask(description)

  //     setDescription('')
  // }

  // function onChangeTitle(event) {
  //     setTitle(event.target.value)
  // }

  // function onChangeDescription(event) {
  //     setDescription(event.target.value)
  // }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <p>Add Coment</p>
      <FormInput Height="auto">
        {/* <label for="name">Name</label> */}
        <Input
          type="text"
          placeholder="Name"
          name="coment"
          value={formData.coment}
          onChange={handleChange}
        />
      </FormInput>

      <FormInput Height="8rem">
        {/* <label for="email">Email</label> */}
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          HeightInput="6rem"
        ></Input>
      </FormInput>
      {/* <button>Send</button> */}

      

      <button className="btn btn-success mx-1" type="submit" value="Enviar" >Send</button>
      {/* <input className="btn btn-danger mx-1" type="reset" value="Cancelar" /> */}
    </FormContainer>
  );
}

export default Header;
