import React from 'react';

import { withRouter } from 'react-router-dom';

import 'bootswatch/dist/darkly/bootstrap.css';
import './SignUp.css';

import UserApiService from '../../services/UserApiService';
import { AuthContext } from '../../main/SessionProvider';

class SignUp extends React.Component {

    state = {
        name: '',
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
    }

    constructor() {
        super();
        this.service = new UserApiService();
    }

    signUp = () => {
        const errors = this.validate();
        if (errors.length > 0) {
            alert(errors[0]);
            return false;
        }

        this.service.create({
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            alert("Usuário criado com sucesso. Você pode fazer login.");
            this.props.history.push('/login');
        }).catch(error => {
            console.log(error.response);
        });

    }

    validate = () => {
        const errors = [];

        if (!this.state.name) {
            errors.push('Campo Nome é obrigatório!');
        }

        if (!this.state.username) {
            errors.push('Nome de Usuário é obrigatório!');
        }

        if (!this.state.email) {
            errors.push('Campo Email é obrigatório!');
        } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
            errors.push('Informe um email válido!');
        }

        if (!this.state.password) {
            errors.push('Campo Senha é obrigatório!');
        } else if (this.state.password !== this.state.passwordRepeat) {
            errors.push('As senhas não batem!');
        }

        return errors;
    }

    render() {
        return (
            <div className="App">
                <header className="Register-header">
                    <h1 className='Register-title'>Cadastrar</h1>

                    <form className='inputField-container'>

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Nome de usuário"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ username: e.target.value }) }}
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
                            placeholder="Senha"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Confirmar Senha"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ passwordRepeat: e.target.value }) }}
                        />
                    </form>

                    <button type='submit' className="btn btn-success" onClick={this.signUp}>Cadastrar</button>
                </header>
            </div>
        );
    }
}

SignUp.contextType = AuthContext;
export default withRouter(SignUp);
