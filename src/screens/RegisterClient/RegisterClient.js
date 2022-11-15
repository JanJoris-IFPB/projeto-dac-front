import React from 'react';
import ClientApiService from '../../services/ClientApiService'
import { withRouter } from 'react-router-dom';
import 'bootswatch/dist/darkly/bootstrap.css';
import './RegisterClient.css';

class RegisterClient extends React.Component {

    state = {
        cpf: '',
        name: '',
        email: '',
        phone: '',
        age: 0
    }

    constructor() {
        super();
        this.service = new ClientApiService("/person");
    }

    onSubmit = () => {
        this.service.post("", {
            cpf: this.state.cpf,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            age: this.state.age
        }).then(response => {
            const person = response.data;
            alert(`${person.name} com CPF ${person.cpf} criado(a) com sucesso`);
            this.props.history.push("/");
        }).catch(error => {
            console.error(error.response);
        });
    }

    render() {
        return (
            <div className="App">
                <header className="Register-header">
                    <h1 className='Register-title'>Cadastrar Cliente</h1>

                    <form className='inputField-container'>
                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="CPF"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ cpf: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Nome"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ phone: e.target.value }) }}
                        />


                        <input
                            style={{ marginBottom: '5px' }}
                            type="number"
                            className="form-control"
                            placeholder='0'
                            id="inputDefault"
                            onChange={(e) => { this.setState({ age: e.target.value }) }}
                        />

                    </form>
                    <button type='submit' className="btn btn-success" onClick={this.onSubmit}>Enviar</button>
                </header>
            </div>
        );
    }
}

export default withRouter(RegisterClient);
