import React from 'react';
import './Main.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">JJCAR - Novos e seminovos</h1>
          <p className="slogan">Very good</p>

          <div className='optionMenu'>
            <h2>Cadastrar</h2>
            <div className='buttonMenu'>
              <button type='submit' onClick={() => { alert('Você clicou no botão!') }}>Cliente</button>
              <button type='submit' onClick={() => { alert('Você clicou no botão!') }}>Veículo</button>
            </div>
          </div>

          <div className='optionMenu'>
            <h2>Consultar</h2>
            <div className='buttonMenu'>
              <button type='submit' onClick={() => { alert('Você clicou no botão!') }}>Cliente</button>
              <button type='submit' onClick={() => { alert('Você clicou no botão!') }}>Veículo</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
