import React, { useState } from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { MsgEmpty } from './components/MsgEmpty';
import { MsgEmptyTech } from './components/MsgEmptyTech';
import { MsgTechExist } from './components/MsgTechExist';
import { MsgEmptyExp } from './components/MsgEmptyExp';
import { Footer } from './components/Footer';
import { PopUpDelete } from './components/PopUpDelete';

import './style.css'

export const App = () => {

  const [inputValues, setInputValues] = useState({technology: '', experience: ''});
  const [tableTitle, setTableTitle] = useState(['Tecnologia', 'Experiência', 'Delete']); // Lista de colunas da tabela
  const [roles, setRoles] = useState([]);
  const [msgEmpty, setMsgEmpty] = useState('');
  const [msgEmptyTech, setMsgEmptyTech] = useState('');
  const [msgTechExist, setMsgTechExist] = useState('');
  const [msgEmptyExp, setMsgEmptyExp] = useState('');
  const [visible, setVisible] = useState(false);

  const onChange = event => {
    const { name, value } = event.target;
  
    let techExists = false;

    roles.forEach((element) => {
      if (inputValues.technology.toLowerCase() === element.tech.toLowerCase()) {
        techExists = true;
      }
    });

    if (techExists){
      setInputValues({ ...inputValues, [name]: value });
      setMsgEmptyTech('');
      setMsgTechExist('Essa tecnologia já se encontra registada!');
    }else{
      setInputValues({ ...inputValues, [name]: value });
      setMsgEmptyTech('');
      setMsgTechExist('');
    }
  };

  const onClick = event => {
    event.preventDefault();

    let techExists = false;

    roles.forEach((element) => {
      if (inputValues.technology.toLowerCase() === element.tech.toLowerCase()) {
        techExists = true;
      }
    });

    if (inputValues.technology === '' && inputValues.experience === ''){
      setMsgEmptyTech('');
      setMsgEmptyExp('');
      setMsgEmpty('É obrigatório introduzir uma tecnologia e a sua experiência!');
    }else if(inputValues.technology === ''){
      setMsgEmpty('');
      setMsgEmptyExp('');
      setMsgEmptyTech('É obrigatório introduzir uma tecnologia!');
    }else if (techExists){
      setMsgEmptyExp('');
    }else if(inputValues.experience === ''){
      setMsgEmpty('');
      setMsgEmptyTech('');
      setMsgEmptyExp('É obrigatório introduzir a sua experiência!');
    }else if(!techExists){
      roles.push({tech: inputValues.technology, exp: inputValues.experience});
      setRoles(roles);
      setInputValues({technology: '', experience: ''});
      setMsgEmpty('');
      setMsgEmptyTech('');
      setMsgEmptyExp('');
      console.log(roles);
    }
  };

  /*const removeRow = (index) => {
      roles.splice(index, 1);
      setRoles(roles);
      console.log(roles);
  };*/
  
  const removePopUpDelete = (index) => {
    console.log(index);
    if(visible === false){
      setVisible(true);
    } else {
      roles.splice(index, 1); //HELP ME PLEASE: NÃO REMOVE O INDEX CERTO NÃO SEI PORQUÊ???
      setRoles(roles);
      setVisible(false);
      console.log(roles);
    }
  };

  const closePopUpDelete = () => {
    if(visible === false){
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const myColumn = tableTitle.map((column) => (
      <th key={column}>
        {column}
      </th>
  ));

  const myRow = roles.map((role, index) => (
    <tr key={role.tech}>
      <td>
        {role.tech}
      </td>
      <td>
        {role.exp}
      </td>
      <td>
        <button id="btn-removeInfo" type="submit" onClick={() => removePopUpDelete(index)}>Delete</button>
      </td>
    </tr>
    ));
      return(
        <div className="container-grid">
          <Header />
          <div className="container-form">
                  <form>
                      <MsgEmpty msgEmpty={msgEmpty} />
                      <label htmlFor="technology">Tecnologia:</label>
                      <br />
                      <input name="technology" type="text" value={inputValues.technology} onChange={onChange} />
                      <MsgEmptyTech msgEmptyTech={msgEmptyTech} />
                      <MsgTechExist msgTechExist={msgTechExist} />
                      <label htmlFor="experience">Experiência:</label>
                      <br />
                      <input name="experience" type="text" value={inputValues.experience} onChange={onChange} />
                      <MsgEmptyExp msgEmptyExp={msgEmptyExp} />
                      <br />
                      <button id="btn-addInfo" type="submit" onClick={onClick}>ADD</button>
                      <br />
                  </form>
              </div>
              <Table myColumn={myColumn} myRow={myRow} />
              <Footer />
              {!visible ? null : <PopUpDelete  removePopUpDelete={removePopUpDelete} closePopUpDelete={closePopUpDelete} />}
        </div>
      );
    };


