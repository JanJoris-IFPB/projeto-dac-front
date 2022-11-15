import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import 'bootswatch/dist/darkly/bootstrap.css';
import { AuthConsumer } from '../../main/SessionProvider';

class Navbar extends React.Component {

    state = {
        accountDropdown: false,
        clientDropdown: false,
        vehicleDropdown: false
    };

    handleAccountDropdown = () => {
        this.setState(state => {
            return { accountDropdown: !state.accountDropdown };
        });
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

                            <NavbarItem className="nav-item dropdown" render={!this.props.isAuthenticated}>
                                <a className="nav-link" href="/login">Login</a>
                            </NavbarItem>

                            <NavbarItem className="nav-item dropdown" render={!this.props.isAuthenticated}>
                                <a className="nav-link" href="/signUp">Cadastrar</a>
                            </NavbarItem>

                            <NavbarItem className="nav-item dropdown" render={this.props.isAuthenticated}>
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#clientDropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={this.handleAccountDropdown}
                                >Conta</a>
                                <div className={this.state.accountDropdown ? "dropdown-menu show" : "dropdown-menu"}>
                                    <a className="dropdown-item" onClick={this.props.logout}>Sair</a>
                                </div>
                            </NavbarItem>

                            <NavbarItem className="nav-item dropdown" render={this.props.isAuthenticated}>
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
                            </NavbarItem>

                            <NavbarItem className="nav-item dropdown" render={this.props.isAuthenticated}>
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
                            </NavbarItem>

                        </ul>

                        <ul className="navbar-nav ms-md-auto">
                            <NavbarItem className="navbar-item" render={true}>
                                <a className="nav-link" rel='noopener' href="https://github.com/JanJoris-IFPB/projeto-dac-front">Github
                                    <i className="bi bi-github" />
                                </a>
                            </NavbarItem>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

// eslint-disable-next-line
export default () => (
    <AuthConsumer>
        {(context) => (
            <Navbar isAuthenticated={context.isAuthenticated} logout={context.end} />
        )}
    </AuthConsumer>
)
