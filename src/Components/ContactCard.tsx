import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_CONTACT_MUTATION } from '../resolvers/Mutation';
import { CONTACTS_QUERY } from '../resolvers/Query';

interface ContactInfo {
  name: string;
  email: string;
  message: string;
}

const ContactCard: React.FC<ContactInfo> = ({ name, email, message }) => {
  const [deleteContact] = useMutation<{ deleteContact: ContactInfo }>(DELETE_CONTACT_MUTATION, {
    variables: { email },
    refetchQueries: [CONTACTS_QUERY]
  });

  const handleDeleteContact: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    deleteContact();
  };

  return (
    <div className="contact-card">
      <div className="name">
        <p className="name__bold">Name:</p>
        <h3>{name}</h3>
      </div>
      <div className="contact-card__info">
        <div className="email">
          <p className="email__bold">Email:</p>
          <p>{email}</p>
        </div>
        <div className="message">
          <p className="message__bold">Message:</p>
          <p>{message}</p>
        </div>
      </div>
      <button type="submit" onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
