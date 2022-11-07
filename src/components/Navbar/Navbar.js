import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.css';

export default class Navbar extends React.Component {

    state = {
        clientDropdown: false,
        vehicleDropdown: false
    };

    handleClientDropdown = () => {
        this.setState(state => {
            return { clientDropdown: !state.clientDropdown };
        });
    };

    handleVehicleDropdown = () => {
        this.setState(state => {
            return { vehicleDropdown: !state.vehicleDropdown };
        });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">

                    <a className="navbar-brand" href="/">JJCAR</a>
                    <button
                        className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="/">Tela principal</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#clientDropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={this.handleClientDropdown}
                                >Clientes</a>
                                <div className={this.state.clientDropdown ? "dropdown-menu show" : "dropdown-menu"}>
                                    <a className="dropdown-item" href="/newClient">Cadastrar</a>
                                    <a className="dropdown-item" href="/listClient">Consultar</a>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#vehicleDropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={this.handleVehicleDropdown}
                                >Veículos</a>
                                <div className={this.state.vehicleDropdown ? "dropdown-menu show" : "dropdown-menu"}>
                                    <a className="dropdown-item" href="/newVehicle">Cadastrar</a>
                                    <a className="dropdown-item" href="/listVehicle">Consultar</a>
                                </div>
                            </li>

                        </ul>

                        <ul class="navbar-nav ms-md-auto">
                            <li className='nav-item'></li>
                            <a className="nav-link" rel='noopener' href="https://github.com/JanJoris-IFPB/projeto-dac-front">Github
                                <i className="bi bi-github" />
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}
