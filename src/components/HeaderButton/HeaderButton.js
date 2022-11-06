import React from 'react';
import './HeaderButton.css'

export class HeaderButton extends React.Component {
    render() {
        return (
            <div className='optionMenu'>
                <h2>{this.props.title}</h2>
                <div className='buttonMenu'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}