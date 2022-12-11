import { React, useState, useEffect } from "react";
import { FormContainer, FormInput, Input } from "./ComentFormStyle";

function ComentForm({ addComent, editComent, editData }) {
  
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
      <button className="btn btn-success mx-1" type="submit" value="Enviar">
        Send
      </button>
      {/* <input className="btn btn-danger mx-1" type="reset" value="Cancelar" /> */}
    </FormContainer>
  );
}

export default ComentForm;
