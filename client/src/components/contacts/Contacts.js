import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact </h4>;
  }

  return (
    <div>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact, index) => (
              <CSSTransition key={index} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact, index) => (
              <CSSTransition key={index} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

export default Contacts;
