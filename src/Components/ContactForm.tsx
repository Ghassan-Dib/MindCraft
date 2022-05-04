import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CONTACT_MUTATION } from '../resolvers/Mutation';
import { CONTACTS_QUERY } from '../resolvers/Query';

interface ContactDetails {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [contact, setContact] = useState<ContactDetails>({
    name: '',
    email: '',
    message: ''
  });
  const [createContact] = useMutation<{ createContact: ContactDetails }>(CREATE_CONTACT_MUTATION, {
    variables: {
      name: contact.name,
      email: contact.email,
      message: contact.message
    },
    refetchQueries: [CONTACTS_QUERY]
  });
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    createContact();
    setContact({ name: '', email: '', message: '' });
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  const handleChangeTextArea: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  return (
    <form className="container__form" onSubmit={handleSubmit}>
      <h3>Contact Us</h3>
      <input
        value={contact.name as string}
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        onChange={handleChange}
        required
      />
      <input
        value={contact.email as string}
        type="email"
        name="email"
        id="email"
        placeholder="Your email"
        onChange={handleChange}
        required
      />
      <textarea
        value={contact.message as string}
        name="message"
        id="message"
        placeholder="Your message"
        onChange={handleChangeTextArea}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
