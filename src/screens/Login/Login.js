import React from 'react';

import { withRouter } from 'react-router-dom';

import 'bootswatch/dist/darkly/bootstrap.css';
import './Login.css';

import AuthApiService from '../../services/AuthApiService';
import { AuthContext } from '../../main/SessionProvider';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    constructor() {
        super();
        this.service = new AuthApiService();
    }

    login = () => {
        this.service.login(
            this.state.username,
            this.state.password
        ).then(user => {
            if (user) {
                this.context.start(user);
                alert(`Bem vindo: ${user.name}`);
                this.props.history.push("/");
            } else {
                alert(`Usuário ou senha incorretos`);
            }
        }).catch(error => {
            console.error(error.response);
            alert(error.response)
        });
    }

    signUp = () => {
        this.props.history.push('/signUp');
    }

    render() {
        return (
            <div className="App">
                <header className="Register-header">
                    <h1 className='Register-title'>Login</h1>

                    <form className='inputField-container'>
                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Usuário"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ username: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Senha"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                        />
                    </form>
                    <div className='buttonDiv'>
                        <button type='submit' className="btn btn-success" onClick={this.login}>Login</button>
                        <button type='submit' className="btn btn-danger" onClick={this.signUp}>Cadastrar</button>
                    </div>
                </header>
            </div>
        );
    }
}

Login.contextType = AuthContext;
export default withRouter(Login);
