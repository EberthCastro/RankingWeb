import { useForm } from "react-hook-form";
import { React, useState, useEffect } from "react";
import {
  Container,
  ContainerForm,
  ContainerImgForm,
  ContainerNameAppForm,
  ContainerTypeAppForm,
  ContainerDataForm,
  ContainerAboutAppForm,
} from "./FormStyle";

import { App, Icon, TextContainer } from "../../components/card/CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import NewApps from "./NewApps";

function Baseimg() {
  //
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
    const savedcoment = window.localStorage.setItem(
      "comentsData",
      JSON.stringify(coments)
    );
    console.log(savedcoment);
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

  //

  const [formData, setFormData] = useState({
    image: "",
    coment: "",
    type: "",
    description: "",
    id: null,
  });

  useEffect(() => {
    if (editData !== null) {
      setFormData(editData);
    } else {
      setFormData({
        image: "",
        coment: "",
        type: "",
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
          image: "",
          coment: "",
          type: "",
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

  // image base 64 option 1
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setBaseImage(base64);
    handleChange(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  //End Imagebase64

  return (
    <Container>
      <h2>Agregar App</h2>
      <ContainerForm onSubmit={handleSubmit}>
        <ContainerImgForm>
          <input
            type="file"
            name="image"
            value={formData.image}
            // onChange={handleChange}
            onChange={handleChange}
          />
          <img src={baseImage} alt="" className="app" />
        </ContainerImgForm>
        <ContainerNameAppForm>
          <input
            type="text"
            placeholder="App name"
            name="coment"
            value={formData.coment}
            onChange={handleChange}
          />
          {/* {errors.name?.type === "required" && <p>App name is required</p>} */}
        </ContainerNameAppForm>
        <ContainerTypeAppForm>
          <input
            type="checkbox"
            name="type"
            value={formData.type}
            onChange={handleChange}
            // {...register("type", { required: true })}
          />
          <label>Desktop</label>
          <input
            type="checkbox"
            name="type"
            // value={formData.type}
            // {...register("type", { required: true })}
          />
          <label>Web</label>
          <input
            type="checkbox"
            name="type"
            // value={formData.type}
            // {...register("type", { required: true })}
          />
          <label>Mobile</label>
        </ContainerTypeAppForm>
        <ContainerAboutAppForm>
          <input
            type="text"
            placeholder="About app"
            name="description"
            value={formData.description}
            onChange={handleChange}

            // {...register("description", { required: true })}
          />
        </ContainerAboutAppForm>
        <div className="contbutton">
          <input type="submit" value="reset" className="button" />
          <input
            type="submit"
            value="send"
            className="button"
            // onChange={(e) => { uploadImage(e) }}
          />
        </div>
      </ContainerForm>
      <NewApps
        baseImage={baseImage}
        coments={coments}
        deleteComent={deleteComent}
        setEditData={setEditData}
      />
    </Container>
  );
}

export default Baseimg;
