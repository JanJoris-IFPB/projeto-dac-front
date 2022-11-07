import React from 'react';
import axios from 'axios';
import { serverURL } from '../../utils/Constants'
import VehicleTable from '../../components/VehicleTable/VehicleTable';
import 'bootswatch/dist/darkly/bootstrap.css';
import './ListVehicle.css';
import { withRouter } from 'react-router-dom';

class ListVehicle extends React.Component {

    state = {
        plate: '',
        results: []
    }

    find = () => {
        const params = this.state.plate !== '' ? `find/plate=${this.state.plate}` : 'all';

        axios.get(`${serverURL}/api/vehicle/${params}`, {
            validateStatus: (status) => {
                return status === 302; // Found
            }
        }).then(response => {
            // If the response returns a single object, put it in an array so we can use the map function for the results table
            const results = Array.isArray(response.data) ? response.data : [response.data];
            this.setState({ results });
        }).catch(error => {
            console.error(error.response);
        });
    }

    edit = (plate) => {
        this.props.history.push(`/updateVehicle/${plate}`);
    }

    delete = (plate) => {
        axios.delete(`${serverURL}/api/vehicle/delete/plate=${plate}`)
            .then(() => {
                alert(`Veículo com placa ${plate} removido`);
                this.find();
            }).catch(error => {
                console.error(error.response);
            });
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <div className='Search'>
                        <input
                            type="text"
                            className="form-control SearchBox"
                            placeholder="Placa"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ plate: e.target.value }) }}
                        />
                        <button
                            type='submit'
                            className="btn btn-success SearchButton"
                            onClick={this.find}>Buscar</button>
                    </div>

                    <VehicleTable
                        vehicles={this.state.results}
                        edit={this.edit}
                        delete={this.delete}
                    />
                </header>
            </div>
        );
    }
}

export default withRouter(ListVehicle)
