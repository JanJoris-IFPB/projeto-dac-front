import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { serverURL } from '../../utils/Constants'
import 'bootswatch/dist/darkly/bootstrap.css';
import './UpdateClient.css';

//TODO: Atualizar cliente
class UpdateClient extends React.Component {

    state = {
        cpf: '',
        name: '',
        email: '',
        phone: '',
        age: 0
    }

    update = () => {
        axios.put(`${serverURL}/api/person/update/cpf=${this.state.cpf}`, {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            age: this.state.age
        }).then(response => {
            const person = response.data;
            alert(`${person.name} atualizado(a) com sucesso`)
            this.props.history.push("/");
        }).catch(error => {
            console.error(error.response);
        });
    }

    render() {
        return (
            <div className="App">
                <header className="Register-header">
                    <h1 className='Register-title'>Atualizar Cliente</h1>

                    <form className='inputField-container'>
                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            id="disabledInput"
                            value={this.state.cpf}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Nome"
                            id="inputDefault"
                            value={this.state.name}
                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            id="inputDefault"
                            value={this.state.email}
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            id="inputDefault"
                            value={this.state.phone}
                            onChange={(e) => { this.setState({ phone: e.target.value }) }}
                        />


                        <input
                            style={{ marginBottom: '5px' }}
                            type="number"
                            className="form-control"
                            placeholder='0'
                            id="inputDefault"
                            value={this.state.age}
                            onChange={(e) => { this.setState({ age: e.target.value }) }}
                        />

                    </form>
                    <button type='submit' className="btn btn-success" onClick={this.update}>Enviar</button>
                </header>
            </div>
        );
    }
}

export default withRouter(UpdateClient)
