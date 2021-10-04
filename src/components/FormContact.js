import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2/src/sweetalert2';

import '../assets/styles/components/FormContact.scss';

const FormContact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmailMessage',
        'template_7l60yug',
        e.target,
        'user_JTUomaEwM4M7Ygjqp279k',
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Listo',
            text: 'Mensaje enviado con éxito',
            // background: '#0d0d0d',
            confirmButtonColor: '#004191'
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ha ocurrido un error, verifica la información e intenta de nuevo',
          });
        },
      );

    e.target.reset();
  }

  return (
    <form onSubmit={sendEmail}>
      <input
        type='hidden'
        name='subject'
        value='Mensaje enviado desde antonycabeza.com'
      />
      <label>Nombre</label>
      <input
        required
        type='text'
        placeholder='Tu nombre o de tu empresa'
        name='name'
      />
      <label>Email</label>
      <input
        required
        type='email'
        placeholder='Correo electrónico'
        name='email'
      />
      <label>Mensaje</label>
      <textarea
        required
        name='message'
        placeholder='Hola Antony, quisiera contactarte para (...)'
      />
      <input type='submit' value='Enviar' className='formButton' />
    </form>
  );
};

export default FormContact;
