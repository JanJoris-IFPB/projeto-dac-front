import React from 'react';
import ClientApiService from '../../services/ClientApiService'
import ClientTable from '../../components/ClientTable/ClientTable';
import 'bootswatch/dist/darkly/bootstrap.css';
import './ListClient.css';
import { withRouter } from 'react-router-dom';

class ListClient extends React.Component {

    state = {
        cpf: '',
        results: []
    }

    constructor() {
        super();
        this.service = new ClientApiService();
    }

    componentDidMount() {
        this.find();
    }

    find = () => {
        const params = this.state.cpf !== '' ? `/find/cpf=${this.state.cpf}` : '/all';

        this.service.get(params)
            .then(response => {
                // If the response returns a single object, put it in an array so we can use the map function for the results table
                const results = Array.isArray(response.data) ? response.data : [response.data];
                this.setState({ results });
            }).catch(error => {
                console.error(error.response);
            });
    }

    edit = (cpf) => {
        this.props.history.push(`/updateClient/${cpf}`);
    }

    delete = (cpf) => {
        this.service.delete(`/delete/cpf=${cpf}`)
            .then(() => {
                alert(`${cpf} removido`);
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
                            placeholder="CPF"
                            id="inputDefault"
                            onChange={(e) => { this.setState({ cpf: e.target.value }) }}
                        />
                        <button
                            type='submit'
                            className="btn btn-success SearchButton"
                            onClick={this.find}>Buscar</button>
                    </div>

                    <ClientTable
                        clients={this.state.results}
                        edit={this.edit}
                        delete={this.delete}
                    />
                </header>
            </div>
        );
    }
}

export default withRouter(ListClient)
