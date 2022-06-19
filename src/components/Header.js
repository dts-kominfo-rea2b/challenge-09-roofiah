// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import style from "./Header.css"

const Header = () => {
    return (
        <header className='header'>
            <h1>Call a Friend</h1>
            <p>your friendly contact app</p>
        </header>
    )
}

export default Header;