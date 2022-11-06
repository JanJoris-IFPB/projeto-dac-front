import React from 'react';
import axios from 'axios';
import { serverURL } from '../../utils/Constants'
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
        axios.post(`${serverURL}/api/vehicle`, {
            plate: this.state.plate,
            make: this.state.make,
            model: this.state.model,
            color: this.state.color
        }, {
            validateStatus: (status) => {
                return status === 201; // Created
            }
        }).then(response => {
            const vehicle = response.data;
            alert(`${vehicle.make} ${vehicle.model} com placa ${vehicle.plate} cadastrado com sucesso`)
        }).catch(error => {
            console.error(error.response);
        });
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
                    </form>
                    <button type='submit' className="btn btn-success" onClick={this.onSubmit}>Enviar</button>
                </header>
            </div>
        );
    }
}
