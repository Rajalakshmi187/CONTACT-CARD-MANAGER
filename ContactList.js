import React from 'react';
import ContactCard from './ContactCard';
import './ContactList.css';

export default function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return (
      <div className="cl__empty">
        <span className="cl__empty-icon">◈</span>
        <p className="cl__empty-title">No cards found</p>
        <p className="cl__empty-sub">Try a different search or add a new contact.</p>
      </div>
    );
  }

  return (
    <div className="cl__grid">
      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} onDelete={onDelete} />
      ))}
    </div>
  );
}
