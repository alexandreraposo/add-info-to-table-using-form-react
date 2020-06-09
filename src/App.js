import React from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { MsgEmpty } from './components/MsgEmpty';
import { MsgEmptyTech } from './components/MsgEmptyTech';
import { MsgTechExist } from './components/MsgTechExist';
import { MsgEmptyExp } from './components/MsgEmptyExp';
import { Footer } from './components/Footer';
import { PopUpDelete } from './components/PopUpDelete';

import './style.css'

export class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      technology: '',
      experience: '',
      roles: [],
      msgEmpty: '',
      msgEmptyTech: '',
      msgTechExist: '',
      msgEmptyExp: '',
      visible: false
    };
  }

  onChange = (event) => {
    
    let roles = this.state.roles;
    let technology = this.state.technology;
    let name = event.target.name;

    let techExists = false;

    roles.forEach((element) => {
      if (technology.toLowerCase() === element.tech.toLowerCase()) {
        techExists = true;
      }
    });

    if (techExists){
      this.setState({
        [name]: event.target.value,
        msgEmptyTech: '',
        msgTechExist: 'Essa tecnologia já se encontra registada!',
        roles: roles
        // NÃO ATUALIZA NO MOMENTO NÃO SEI PORQUÊ?????????
      });
    }else{
      this.setState({
        [name]: event.target.value,
        msgEmptyTech: '',
        msgTechExist: '',
        roles: roles
      });
    }
  }

  onClick = (event) => {
    event.preventDefault();
    let roles = this.state.roles;
    let technology = this.state.technology;
    let experience = this.state.experience;

    let techExists = false;

    roles.forEach((element) => {
      if (technology.toLowerCase() === element.tech.toLowerCase()) {
        techExists = true;
      }
    });

    if (technology === '' && experience === ''){
      this.setState({
        msgEmptyTech: '',
        msgEmptyExp: '',
        msgEmpty: 'É obrigatório introduzir uma tecnologia e a sua experiência!'
      });
    }else if(technology === ''){
      this.setState({
        msgEmpty: '',
        msgEmptyExp: '',
        msgEmptyTech: 'É obrigatório introduzir uma tecnologia!'
      });
    }else if (techExists){
      this.setState({
        msgEmptyExp: ''
      });
    }else if(experience === ''){
      this.setState({
        msgEmpty: '',
        msgEmptyTech: '',
        msgEmptyExp: 'É obrigatório introduzir a sua experiência!'
      });
    }else if(!techExists){

      roles.push({tech: technology, exp: experience});

      this.setState({
        roles: roles,
        technology: '',
        experience: '',
        msgEmpty: '',
        msgEmptyTech: '',
        msgEmptyExp: ''
      });

      console.log(this.state.roles);

    }
  }

  /*removeRow = (index) => {
      this.state.roles.splice(index, 1);
      this.setState({roles: this.state.roles});
      console.log(this.state.roles);
  }*/

  popUpDelete = (index) => {
    console.log(index);
    if(this.state.visible === false){
      this.setState({
        visible: true
      });
    } else {
      this.setState({
        visible: false
      });
    }
  }

  render() {
      const myRow = this.state.roles.map((role, index) => (
          <tr key={role.tech}>
              <td>
                  {role.tech}
              </td>
              <td>
                  {role.exp}
              </td>
              <td>
                  <button id="btn-removeInfo" type="submit" onClick={() => this.popUpDelete(index)}>Delete</button>
              </td>
          </tr>
          ))
      return(
        <div className="container-grid">
          <Header />
          <div className="container-form">
                  <form>
                      <MsgEmpty msgEmpty={this.state.msgEmpty} />
                      <label htmlFor="technology">Tecnologia:</label>
                      <br />
                      <input name="technology" type="text" value={this.state.technology} onChange={this.onChange} />
                      <MsgEmptyTech msgEmptyTech={this.state.msgEmptyTech} />
                      <MsgTechExist msgTechExist={this.state.msgTechExist} />
                      <label htmlFor="experience">Experiência:</label>
                      <br />
                      <input name="experience" type="text" value={this.state.experience} onChange={this.onChange} />
                      <MsgEmptyExp msgEmptyExp={this.state.msgEmptyExp} />
                      <br />
                      <button id="btn-addInfo" type="submit" onClick={this.onClick}>ADD</button>
                      <br />
                  </form>
              </div>
              <Table myRow={myRow}/>
              <Footer />
              {!this.state.visible ? null : <PopUpDelete  popUpDelete={this.popUpDelete}/>}
        </div>
      );
  }
}


