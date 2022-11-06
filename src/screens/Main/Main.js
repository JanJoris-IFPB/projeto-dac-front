import React from 'react';
import { withRouter } from 'react-router-dom';
import { HeaderButton } from '../../components/HeaderButton/HeaderButton';
import 'bootswatch/dist/darkly/bootstrap.css';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="title">JJCAR - Novos e seminovos</h1>
          <p><em>Very good</em></p>

          <HeaderButton title='Cadastrar'>
            <button type="button" className="btn btn-primary" onClick={() => { this.props.history.push("/newClient") }}>Cliente</button>
            <button type="button" className="btn btn-primary" onClick={() => { this.props.history.push("/newVehicle") }}>Veículo</button>
          </HeaderButton>

          <HeaderButton title='Consultar'>
            <button type="button" className="btn btn-primary" onClick={() => { this.props.history.push("/listClient") }}>Cliente</button>
            <button type="button" className="btn btn-primary" onClick={() => { this.props.history.push("/listVehicle") }}>Veículo</button>
          </HeaderButton>

        </header>
      </div>
    );
  }
}

export default withRouter(Main);
