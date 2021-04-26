import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
const Contact = () => {
  //formState = hook, setFormState=method that will update data in the hook
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const { name, email, subject, message } = formState;

  //write function to update hook with any info user types in
  //state = scope of variables we want to keep track of. scope is contained within the component.

  const onChange = (event) => {
    //this is kind of like an event listener.
    //declare event listener on form inputs
    //initiate setFormState (function that updates hook of formstate), ...formState=spread notation: keep form state intact but we're changing something in here. we don't want to overwrite the whole thing, only one element... after :, what we're going to change. without spread notation, if we update single property, it'd update the property but delete the other properties.
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  //handle submit event

  const onSubmit = (event) => {
    event.preventDefault(); //when user clicks submit, default action that form takes is it refreshes. prevent this from happening.
    if (!name) alert('Please enter a name');
    console.log(validateEmail(email));
    if (validateEmail(email)) {
      setSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div>
      <div className='contact'>
        <div className='text-center'>
          <h1>Contact</h1>
          <p>To contact me, please fill out this form.</p>
        </div>
        <div className='container'>
          <form className='row' onSubmit={(event) => onSubmit(event)}>
            <div className='col-md-6 col-xs-12'>
              {/* Enter Name */}
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
                value={name}
                // event listener
                //pass event into onChange function... call onChange function and pass in event.
                onChange={(event) => onChange(event)}
              />

              {/* Enter Email */}
              <input
                type='email'
                className='form-control'
                placeholder='Email address'
                name='email'
                value={email}
                onChange={(event) => onChange(event)}
              />
              {/* Enter Subject Line */}
              <input
                type='text'
                name='subject'
                className='form-control'
                placeholder='Subject'
                value={subject}
                onChange={(event) => onChange(event)}
              />
              {/* Enter Message */}
              <textarea
                type='text'
                name='message'
                className='form-control'
                placeholder='Message'
                value={message}
                onChange={(event) => onChange(event)}
              ></textarea>
              <div>
                <button className='contact-btn' type='submit'>
                  Submit
                </button>
              </div>
              {success && (
                <div>
                  <p className='success-text'>Your email has been sent.</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
