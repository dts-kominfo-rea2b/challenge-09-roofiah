// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import style from './Contact.css';

const Contact = ({ data }) => {
    const { name, email, phone, photo } = data;
    return (
        <div className='boxContact'>
            <div>
                <img src={photo} alt={name} />
            </div>
            <div>
                <div><p>{name}</p></div>
                <div>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;