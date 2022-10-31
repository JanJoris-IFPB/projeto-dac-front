import React from 'react';
import './RegisterVehicle.css';

export default class RegisterVehicle extends React.Component {

    state = {
        plate: '',
        make: '',
        model: '',
        color: '',
    }

    onSubmit = () => {
        alert(this.state.plate);
        alert(this.state.make);
        alert(this.state.model);
        alert(this.state.color);
    }

    render() {
        return (
            <div className="App">
                <header className="Register-header">
                    <h1 className='Register-title'>Cadastrar Veículo</h1>

                    <form className='inputField-container'>
                        <div className='fieldWithLabel'>
                            <label>Placa: </label>
                            <input
                                type="text"
                                name="Plate"
                                value={this.state.plate}
                                onChange={(e) => { this.setState({ plate: e.target.value }) }}
                            />
                        </div>

                        <div className='fieldWithLabel'>
                            <label>Marca: </label>
                            <input
                                type="text"
                                name="Make"
                                value={this.state.make}
                                onChange={(e) => { this.setState({ make: e.target.value }) }}
                            />
                        </div>

                        <div className='fieldWithLabel'>
                            <label>Modelo: </label>
                            <input
                                type="text"
                                name="Model"
                                value={this.state.model}
                                onChange={(e) => { this.setState({ model: e.target.value }) }}
                            />
                        </div>

                        <div className='fieldWithLabel'>
                            <label>Cor: </label>
                            <input
                                type="text"
                                name="Color"
                                value={this.state.color}
                                onChange={(e) => { this.setState({ color: e.target.value }) }}
                            />
                        </div>

                        <button type='submit' onClick={this.onSubmit}>Enviar</button>
                    </form>
                </header>
            </div>
        );
    }
}
