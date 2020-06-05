import React from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { MsgEmpty } from './components/MsgEmpty';
import { MsgEmptyTech } from './components/MsgEmptyTech';
import { MsgTechExist } from './components/MsgTechExist';
import { MsgEmptyExp } from './components/MsgEmptyExp';
import { Footer } from './components/Footer';

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
          msgEmptyExp: ''
      };

  }

  onChange = (event) => {
      /*let techExists = false;

      this.state.roles.forEach((element) => {
          if (this.state.technology === element.tech) {
              techExists = true;
              console.log('true');
          }
      });
      if (techExists){
          const state = Object.assign({}, this.state);
          console.log(state);
          const inp = event.target.name;
          state[inp] = event.target.value;
  
          this.setState(state);
        }else{
          const state = Object.assign({}, this.state);
          console.log(state);
          const inp = event.target.name;
          state[inp] = event.target.value;
  
          this.setState(state);
          this.setState({msgEmptyTech: ''});
          this.setState({msgTechExist: ''});
        }*/

        const state = Object.assign({}, this.state);
          console.log(state);
          const inp = event.target.name;
          state[inp] = event.target.value;
  
          this.setState(state);
  }

  onClick = (event) => {
      event.preventDefault();

      let techExists = false;

      this.state.roles.forEach((element) => {
          if (this.state.technology === element.tech) {
              techExists = true;
              console.log('true');
          }
      });

      if (this.state.technology === '' && this.state.experience === ''){
          this.setState({msgEmptyTech: ''});
          this.setState({msgEmptyExp: ''});
          this.setState({msgEmpty: 'É obrigatório introduzir uma tecnologia e a sua experiência!'});
        }else if(this.state.technology === ''){
          this.setState({msgEmpty: ''});
          this.setState({msgEmptyExp: ''});
          this.setState({msgEmptyTech: 'É obrigatório introduzir uma tecnologia!'});
        }else if (techExists){
          this.setState({msgEmptyExp: ''});
        }else if(this.state.experience === ''){
          this.setState({msgEmpty: ''});
          this.setState({msgEmptyTech: ''});
          this.setState({msgEmptyExp: 'É obrigatório introduzir a sua experiência!'});
        }else if(!techExists){
          this.setState({msgEmpty: ''});
          this.setState({msgEmptyTech: ''});
          this.setState({msgEmptyExp: ''});
          
          const technology = this.state.technology;
          const experience = this.state.experience;
          this.state.roles.push({tech: technology, exp: experience});
          this.setState({ roles: this.state.roles });
          console.log(this.state.roles);

          this.setState({technology: ''});
          this.setState({experience: ''});
        }
  }

  removeRow = (index) => {
      this.state.roles.splice(index, 1);
      this.setState({roles: this.state.roles});
      console.log(this.state.roles);
  }

  render() {
      const myRow = this.state.roles.map((role, index) => (
          <tr>
              <td>
                  {role.tech}
              </td>
              <td>
                  {role.exp}
              </td>
              <td>
                  <button id="btn-removeInfo" type="submit" onClick={() => this.removeRow(index)}>Delete</button>
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
        </div>
      );
  }
}


