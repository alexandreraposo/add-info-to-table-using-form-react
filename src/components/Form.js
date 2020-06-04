import React from 'react';
import Table from './Table';

class Form extends React.Component {
    constructor(){
        super()

        this.state = {
            technology: '',
            experience: '',
            roles: []
        }

    }

    onChange = (event) => {
        const state = Object.assign({}, this.state);
        const inp = event.target.name;
        state[inp] = event.target.value;

        this.setState(state);
    }

    onClick = (event) => {
        event.preventDefault();
        const technology = this.state.technology;
        const experience = this.state.experience;
        this.state.roles.push({tech: technology, exp: experience});
        this.setState({ roles: this.state.roles });
        console.log(this.state.roles); 
    }

    render() {
        const myRow = this.state.roles.map(role => <tr><td>{role.tech}</td><td>{role.exp}</td><td><button type="submit">Delete</button></td></tr>)
        return(
            <div>
                <form>
                    <label>Tecnologia:</label>
                    <br />
                    <input type="text" name="technology" value={this.state.technology} onChange={this.onChange} />
                    <br />
                    <label>Experiência:</label>
                    <br />
                    <input type="text" name="experience" value={this.state.experience} onChange={this.onChange} />
                    <br />
                    <button type="submit" onClick={this.onClick}>ADD</button>
                    <br />
                </form>
                <Table myRow={myRow}/>
          </div>
        );
    }
}

export default Form;