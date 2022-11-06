import React from 'react';
import 'bootswatch/dist/darkly/bootstrap.css';

export default props => {

    const rows = props.clients.map((client) => {
        return (
            <tr key={client.cpf}>
                <td>{client.cpf}</td>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.age}</td>
                <td>{client.phone}</td>

                <td>
                    <button type='submit' className="btn btn-warning" onClick={ () => props.edit(client.cpf) }>Editar</button>
                    <button type='submit' className="btn btn-danger" onClick={ () => props.delete(client.cpf) }>Apagar</button>
                </td>
            </tr>
        );
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">CPF</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}
