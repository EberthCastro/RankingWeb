import React from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import { useState, useEffect } from "react";

function Appp() {
  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState(() => {
    const saveEquipos = window.localStorage.getItem("equiposData");
    if (saveEquipos) {
      return JSON.parse(saveEquipos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("equiposData", JSON.stringify(equipos));
  }, [equipos]);

  // inserción de datos
  function addEquipo (equipo) {
    setEquipos([...equipos, equipo]);
  };

  // editar un equipo
  function editEquipo (equipo) {
    const newEquipos = equipos.map((el) => (el.id === equipo.id ? equipo : el));
    setEquipos(newEquipos);
    setEditData(null);
  };

  // Eliminar un equipo
  function deleteEquipo (id)  {
    const isDelete = window.confirm(
      `¿Deseas eliminar el registro con id: ${id}?`
    );

    if (isDelete) {
      const newEquipos = equipos.filter((el) => el.id !== id);
      setEquipos(newEquipos);
    }
  };

  //   function addDesc(taskDesc){
  //     setTasks([
  //         ...tasks,
  //         {
  //             id: crypto.randomUUID(),
  //             title: taskTitle,
  //             isCompleted: false
  //         }
  //     ])
  // }

  return (
    <div>
      <Tasks
        equipos={equipos}
        setEditData={setEditData}
        deleteEquipo={deleteEquipo}
      />
      <Header
        addEquipo={addEquipo}
        editEquipo={editEquipo}
        editData={editData}
      />
    </div>
  );
}

export default Appp;
