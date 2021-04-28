import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  //formState = hook
  //setFormState=method that will update data in the hook
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formMessage, setFormMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setFormMessage('Your email address is invalid.');
      } else {
        setFormMessage('');
      }
    } else {
      if (!e.target.value.length) {
        const name = e.target.name;
        setFormMessage(
          `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
        );
      } else {
        setFormMessage('');
      }
    }
    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uhlzsci',
        'template_mv7x85q',
        e.target,
        'user_wvorSaPbNOQxPu94cFaII'
      )
      .then(
        function (response) {
          console.log(response.text);
          setFormMessage('Message sent!');
        },
        function (error) {
          console.log(error.text);
          setFormMessage(
            "Your message could not be sent."
          );
        }
      );
  }

  // 
  
  return (
    <div>
    <div className='contact'>
      <div className='text-center'>
        <h1>Contact</h1>
        <p>To contact me, please fill out this form.</p>
      </div>
      <div className='container'>
    <Form onSubmit={sendEmail} id='contactForm'>
      <Form.Group controlId='name'>
        <Form.Control
          required
          name='name'
          placeholder='Name'
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId='email'>
        <Form.Control
          required
          name='email'
          type='email'
          placeholder='Email'
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId='subject'>
        <Form.Control
          required
          name='subject'
          placeholder='Subject'
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId='message'>
        <Form.Control
          required
          name='message'
          as='textarea'
          rows='5'
          placeholder='Message'
          onBlur={handleChange}
        />
      </Form.Group>

      {formMessage && <p className='form-message'>{formMessage}</p>}

      <div>
              <button className='contact-btn' type='submit'>
                Submit
              </button>
            </div>
    </Form>
    </div>
    </div>
  </div>
  );
}
export default Contact;
