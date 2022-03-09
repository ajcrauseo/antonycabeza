import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2/src/sweetalert2';

import '../assets/styles/components/FormContact.scss';

const FormContact = ({ language }) => {
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
            title: language ? 'Listo' : 'Ok',
            text: language
              ? 'Mensaje enviado con éxito'
              : 'Message sent succesfully',
            // background: '#0d0d0d',
            confirmButtonColor: '#004191',
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: language
              ? 'Ha ocurrido un error, verifica la información e intenta de nuevo'
              : 'An error has occurred, please check the information and try again',
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
      <label>{language ? 'Nombre' : 'Name'}</label>
      <input
        required
        type='text'
        placeholder={
          language
            ? 'Tu nombre o de tu empresa'
            : `Your name or your company's name`
        }
        name='name'
      />
      <label>Email</label>
      <input
        required
        type='email'
        placeholder={language ? 'Correo electrónico' : 'Email'}
        name='email'
      />
      <label>{language ? 'Mensaje' : 'Message'}</label>
      <textarea
        required
        name='message'
        placeholder={
          language
            ? 'Hola Antony, quisiera contactarte para (...)'
            : 'Hello Antony, I would like to contact you to (...)'
        }
      />
      <input
        type='submit'
        value={language ? 'Enviar' : 'Send'}
        className='formButton'
      />
    </form>
  );
};

export default FormContact;
