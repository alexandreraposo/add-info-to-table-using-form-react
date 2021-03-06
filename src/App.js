import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { InputTechnology } from "./components/InputTechnology/InputTechnology";
import { InputExperience } from "./components/InputExperience/InputExperience";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import { Table } from "./components/Table/Table";
import { MsgValidation } from "./components/MsgValidation/MsgValidation";
import { Footer } from "./components/Footer/Footer";
import { PopUpDelete } from "./components/PopUpDelete/PopUpDelete";

import "./App.css";

export const App = () => {
  const [inputValues, setInputValues] = useState({
    technology: "",
    experience: "",
  });
  const [tableColumn, setTableColumn] = useState([
    "Tecnologia",
    "Experiência",
    "Delete",
  ]); // Lista de colunas da tabela
  const [rowIndex, setRowIndex] = useState(null);
  const [roles, setRoles] = useState([]);
  const [msgEmpty, setMsgEmpty] = useState("");
  const [msgEmptyTech, setMsgEmptyTech] = useState("");
  const [msgTechExist, setMsgTechExist] = useState("");
  const [msgEmptyExp, setMsgEmptyExp] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let techExists = false;

    roles.forEach((element) => {
      if (inputValues.technology.toLowerCase() === element.tech.toLowerCase()) {
        techExists = true;
      }
    });

    if (techExists) {
      setMsgEmptyTech("");
      setMsgTechExist("Essa tecnologia já se encontra registada!");
    } else {
      setMsgEmptyTech("");
      setMsgTechExist("");
    }
  }, [inputValues]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onClick = (event) => {
    event.preventDefault();

    let techExists = false;

    roles.forEach((element) => {
      if (inputValues.technology.toLowerCase() === element.tech.toLowerCase()) {
        techExists = true;
      }
    });

    if (inputValues.technology === "" && inputValues.experience === "") {
      setMsgEmptyTech("");
      setMsgEmptyExp("");
      setMsgEmpty(
        "É obrigatório introduzir uma tecnologia e a sua experiência!"
      );
    } else if (inputValues.technology === "") {
      setMsgEmpty("");
      setMsgEmptyExp("");
      setMsgEmptyTech("É obrigatório introduzir uma tecnologia!");
    } else if (techExists) {
      setMsgEmptyExp("");
    } else if (inputValues.experience === "") {
      setMsgEmpty("");
      setMsgEmptyTech("");
      setMsgEmptyExp("É obrigatório introduzir a sua experiência!");
    } else if (!techExists) {
      roles.push({ tech: inputValues.technology, exp: inputValues.experience });
      setRoles(roles);
      setInputValues({ technology: "", experience: "" });
      setMsgEmpty("");
      setMsgEmptyTech("");
      setMsgEmptyExp("");
      console.log(roles);
    }
  };
  
  const openPopUpDelete = (index) => {
    if (visible === false) {
      setRowIndex(index);
      setVisible(true);
      console.log(index);
    }
  };

  const removePopUpDelete = () => {
    if (visible)
    roles.splice(rowIndex, 1);
    setRowIndex(null);
    setVisible(false);
  }

  const closePopUpDelete = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <div className="container-grid">
      <Header />
      <div className="container-form">
        <form>
          <MsgValidation msgEmpty={msgEmpty} />
          <InputTechnology value={inputValues.technology} onChange={onChange} />
          <MsgValidation msgEmptyTech={msgEmptyTech} />
          <MsgValidation msgTechExist={msgTechExist} />
          <InputExperience value={inputValues.experience} onChange={onChange} />
          <MsgValidation msgEmptyExp={msgEmptyExp} />
          <br />
          <ButtonAdd onClick={onClick} />
          <br />
        </form>
      </div>
      <Table tableColumn={tableColumn} roles={roles} openPopUpDelete={openPopUpDelete} />
      <Footer />
      {visible && (
        <PopUpDelete
          removePopUpDelete={removePopUpDelete}
          closePopUpDelete={closePopUpDelete}
        />
      )}
    </div>
  );
};


