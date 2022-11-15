import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { serverURL } from '../../utils/Constants'
import 'bootswatch/dist/darkly/bootstrap.css';
import './UpdateVehicle.css';

//TODO: Atualizar veículo
class UpdateVehicle extends React.Component {

    state = {
        plate: '',
        make: '',
        model: '',
        color: '',
    }

    componentDidMount() {
        const params = this.props.match.params;
        this.find(params.plate);
    }

    find = (plate) => {
        axios.get(`${serverURL}/api/vehicle/find/plate=${plate}`, {
            validateStatus: (status) => {
                return status === 302; // Found
            }
        }).then(response => {
            const { plate, make, model, color } = response.data;
            this.setState({ plate, make, model, color });
        }).catch(error => {
            console.error(error.response);
        });
    }

    update = () => {
        axios.put(`${serverURL}/api/vehicle/update/plate=${this.state.plate}`, {
            make: this.state.make,
            model: this.state.model,
            color: this.state.color
        }).then(response => {
            const vehicle = response.data;
            alert(`${vehicle.make} ${vehicle.model} ${vehicle.plate} atualizado com sucesso`);
            this.props.history.push("/listVehicle");
        }).catch(error => {
            console.error(error.response);
        });
    }

    render() {
        return (
            <div className="App">
                <header className="Register-header">
                    <h1 className='Register-title'>Atualizar Veículo</h1>

                    <form className='inputField-container'>
                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Placa"
                            id="disabledInput"
                            value={this.state.plate}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Marca"
                            id="inputDefault"
                            value={this.state.make}
                            onChange={(e) => { this.setState({ make: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Modelo"
                            id="inputDefault"
                            value={this.state.model}
                            onChange={(e) => { this.setState({ model: e.target.value }) }}
                        />

                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="Cor"
                            id="inputDefault"
                            value={this.state.color}
                            onChange={(e) => { this.setState({ color: e.target.value }) }}
                        />
                    </form>
                    <button type='submit' className="btn btn-success" onClick={this.update}>Enviar</button>
                </header>
            </div>
        );
    }
}

export default withRouter(UpdateVehicle)
