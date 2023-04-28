'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import { styles } from '../styles';
import { slideIn } from '../lib/motion';

const ContactForm = ({
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_PUBLIC_KEY,
}) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if (!form.name) {
      setLoading(false);
      return Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'You need to write your name, please 👀',
        confirmButtonText: 'Ok',
        color: '#f3f3f3',
        background: '#151030',
      });
    }

    if (!form.email) {
      setLoading(false);

      return Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'You need to write your email to contact you! 👀',
        confirmButtonText: 'Ok',
        color: '#f3f3f3',
        background: '#151030',
      });
    }

    if (!form.message) {
      setLoading(false);

      return Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Write a beautiful message, please 👀',
        confirmButtonText: 'Ok',
        color: '#f3f3f3',
        background: '#151030',
      });
    }

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Antony Cabeza',
          from_email: form.email,
          to_email: 'antonycabeza@gmail.com',
          message: form.message,
        },
        EMAIL_JS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'Thank you!',
            text: 'I will get back to you as soon as possible. 🫂',
            confirmButtonText: 'Ok',
            color: '#f3f3f3',
            background: '#151030',
          });
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Sorry, something went wrong. Try again. 🙁',
            confirmButtonText: 'Ok',
            color: '#f3f3f3',
            background: '#151030',
          });
        },
      );
  };

  return (
    <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='mx-auto flex flex-col bg-black-100 p-8 rounded-2xl w-full max-w-[700px] xl:max-w-[700px]'
    >
      <p className={`${styles.sectionSubText}`}>Get in touch</p>
      <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-4 flex flex-col gap-6'
      >
        {/* First Input */}
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        {/* Second Input */}
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Email</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        {/* Third Input */}
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
            rows={3}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What do you want to say?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
        <button
          type='submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
