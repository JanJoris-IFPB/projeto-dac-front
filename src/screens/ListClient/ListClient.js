import React from 'react';
import axios from 'axios';
import { serverURL } from '../../utils/Constants'
import ClientTable from '../../components/ClientTable/ClientTable';
import 'bootswatch/dist/darkly/bootstrap.css';
import './ListClient.css';

export default class ListClient extends React.Component {

    state = {
        cpf: '',
        results: []
    }

    find = () => {
        const params = this.state.cpf !== '' ? `find/cpf=${this.state.cpf}` : 'all';

        axios.get(`${serverURL}/api/person/${params}`, {
            validateStatus: (status) => {
                return status === 302; // Found
            }
        }).then(response => {
            // If the response returns a single object, put it in an array so we can use the map function for the results table
            const results = Array.isArray(response.data) ? response.data : [response.data] ;
            this.setState({ results });
        }).catch(error => {
            console.error(error.response);
        });

    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <div>
                        <input
                            style={{ marginBottom: '5px' }}
                            type="text"
                            className="form-control"
                            placeholder="CPF"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ cpf: e.target.value }) }}
                        />
                        <button type='submit' className="btn btn-success" onClick={this.find}>Buscar</button>
                    </div>

                    <ClientTable clients={this.state.results} />
                </header>
            </div>
        );
    }
}