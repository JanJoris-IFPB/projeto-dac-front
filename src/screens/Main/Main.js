import React from 'react';
import { HeaderButton } from '../../components/HeaderButton/HeaderButton';
import 'bootswatch/dist/darkly/bootstrap.css';
import './Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="title">JJCAR - Novos e seminovos</h1>
          <p><em>Very good</em></p>

          <HeaderButton title='Cadastrar'>
            <button type="button" className="btn btn-primary" onClick={() => { alert('Você clicou no botão!') }}>Cliente</button>
            <button type="button" className="btn btn-primary" onClick={() => { alert('Você clicou no botão!') }}>Veículo</button>
          </HeaderButton>

          <HeaderButton title='Consultar'>
            <button type="button" className="btn btn-primary" onClick={() => { alert('Você clicou no botão!') }}>Cliente</button>
            <button type="button" className="btn btn-primary" onClick={() => { alert('Você clicou no botão!') }}>Veículo</button>
          </HeaderButton>

          <HeaderButton title='Atualizar'>
            <button type="button" className="btn btn-primary" onClick={() => { alert('Você clicou no botão!') }}>Cliente</button>
            <button type="button" className="btn btn-primary" onClick={() => { alert('Você clicou no botão!') }}>Veículo</button>
          </HeaderButton>

          <HeaderButton title='Remover'>
            <button type="button" className="btn btn-primary" onClick={() => { alert('Você clicou no botão!') }}>Cliente</button>
            <button type="button" className="btn btn-primary" onClick={() => { alert('Você clicou no botão!') }}>Veículo</button>
          </HeaderButton>

        </header>
      </div>
    );
  }
}
