import React from 'react';
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
                        <div className='fieldWithLabel'>
                            <label>CPF: </label>
                            <input
                                type="text"
                                name="CPF"
                                value={this.state.cpf}
                                onChange={(e) => { this.setState({ cpf: e.target.value }) }}
                            />
                        </div>
                        <div className='fieldWithLabel'>
                            <label>Nome: </label>
                            <input
                                type="text"
                                name="Name"
                                value={this.state.name}
                                onChange={(e) => { this.setState({ name: e.target.value }) }}
                            />
                        </div>
                        <div className='fieldWithLabel'>
                            <label>Email: </label>
                            <input
                                type="text"
                                name="Email"
                                value={this.state.email}
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                            />
                        </div>
                        <div className='fieldWithLabel'>
                            <label>Telefone: </label>
                            <input
                                type="text"
                                name="Phone"
                                value={this.state.phone}
                                onChange={(e) => { this.setState({ phone: e.target.value }) }}
                            />
                        </div>
                        <div className='fieldWithLabel'>
                            <label>Idade: </label>
                            <input
                                type='number'
                                name="Age"
                                value={this.state.age}
                                onChange={(e) => { this.setState({ age: e.target.value }) }}
                            />
                        </div>

                        <button type='submit' onClick={this.onSubmit}>Enviar</button>
                    </form>
                </header>
            </div>
        );
    }
}
