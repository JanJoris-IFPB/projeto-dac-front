import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.css';
import './RegisterVehicle.css';

export default class RegisterVehicle extends React.Component {

    state = {
        plate: '',
        make: '',
        model: '',
        color: '',
    }

    onSubmit = () => {
        alert(this.state.plate);
        alert(this.state.make);
        alert(this.state.model);
        alert(this.state.color);
    }

    render() {
        return (
            <div className="App">
                <header className="Register-header">
                    <h1 className='Register-title'>Cadastrar Veículo</h1>

                    <form className='inputField-container'>
                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Placa"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ plate: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Marca"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ make: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Modelo"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ model: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Cor"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ color: e.target.value }) }}
                        />

                        <button type='submit' className="btn btn-success" onClick={this.onSubmit}>Enviar</button>
                    </form>
                </header>
            </div>
        );
    }
}
