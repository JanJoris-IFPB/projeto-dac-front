import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.css';

export default props => {

    const rows = props.vehicles.map((vehicle) => {
        return (
            <tr key={vehicle.plate}>
                <td>{vehicle.plate}</td>
                <td>{vehicle.make}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.color}</td>

                <td>
                    <button type='submit' className="btn btn-warning" onClick={ () => props.edit(vehicle.plate) }>Editar</button>
                    <button type='submit' className="btn btn-danger" onClick={ () => props.delete(vehicle.plate) }>Apagar</button>
                </td>
            </tr>
        );
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Placa</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Cor</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}
