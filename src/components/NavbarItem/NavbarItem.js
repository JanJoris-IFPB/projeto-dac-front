import React from 'react'

function NavbarItem({ render, ...props }) {
    if (render) {
        return (
            <li className={props.className}>
                {props.children}
            </li>
        )
    }
    return false;

}

export default NavbarItem;
