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

const Form = () => {
  //Local Storage
  const [coments, setComents] = useState(() => {
    const saveComents = window.localStorage.getItem("New Apps");
    if (saveComents) {
      return JSON.parse(saveComents);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("New Apps", JSON.stringify(coments));
    // console.log(savedapps);
  }, [coments]);

  const addComent = (coment) => {
    setComents([...coments, coment]);
  };

  //End Local Storage

  // delete a app
  const deleteComent = (id) => {
    const isDelete = window.confirm(
      `¿Deseas eliminar el registro con id: ${id}?`
    );

    if (isDelete) {
      const newComents = coments.filter((el) => el.id !== id);
      setComents(newComents);
    }
  };

  //End Delette App

  //Form of useForm React

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (dataApp) => {
    // console.log(dataApp);

    addComent(dataApp);
  };

  //End useForm

  // image base 64 option 1
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setBaseImage(base64);
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
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <ContainerImgForm  >
        <input type="file" 
        
        onChange={(e => {
            uploadImage(e)
        })} 
        ref={register}
            name="picture"
            {...register("picture", { required: false })}/>
          <img src={baseImage} alt="" className="app" />
        </ContainerImgForm>
        <ContainerNameAppForm>
          <input
            type="text"
            placeholder="App name"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && <p>App name is required</p>}
        </ContainerNameAppForm>
        <ContainerTypeAppForm>
          <input
            type="checkbox"
            value="Mobile"
            {...register("type", { required: true })}
          />
          <label>Desktop</label>
          <input
            type="checkbox"
            value="Desktop"
            {...register("type", { required: true })}
          />
          <label>Web</label>
          <input
            type="checkbox"
            value="Web"
            {...register("type", { required: true })}
          />
          <label>Mobile</label>
        </ContainerTypeAppForm>
        <ContainerAboutAppForm>
          <input
            type="text"
            placeholder="About app"
            name="description"
            {...register("description", { required: true })}
          />
        </ContainerAboutAppForm>
        <input type="submit" value="reset" />
        <input
          type="submit"
          value="send"
          // onChange={(e) => { uploadImage(e) }}
        />
      </ContainerForm>
      {coments.map((e, index) => {
        return (
          <App key={index}>
            {/* <Link to={`/${app.id}`}> */}
            <Icon src={baseImage} alt="descr" />
            {/* </Link> */}
            <TextContainer>
              <span>
                <b>{e.name}</b>
              </span>
              <span>{e.type[0]}</span>
              <div className="star">
                <AiFillStar style={{ color: "#2670E0" }} />
                <span>4,5</span>
              </div>
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
    </Container>
  );
};

export default Form;
