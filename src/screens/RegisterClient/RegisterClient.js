import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.css';
import './RegisterClient.css';

export default class RegisterClient extends React.Component {

    state = {
        cpf: '',
        name: '',
        email: '',
        phone: '',
        age: 0
    }

    onSubmit = () => {
        alert(this.state.cpf);
        alert(this.state.name);
        alert(this.state.email);
        alert(this.state.phone);
        alert(this.state.age);
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
