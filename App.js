import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const SEED_CONTACTS = [
  {
    id: 1,
    name: 'Aisha Patel',
    title: 'Creative Director',
    company: 'Moodboard Studio',
    phone: '+1 (415) 839-2201',
    email: 'aisha@moodboard.io',
    bio: 'Crafting visual identities that outlive trends. 12 years shaping brand worlds for Fortune 500s and indie darlings alike.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 2,
    name: 'Marcus Levin',
    title: 'Senior Engineer',
    company: 'Archetype Labs',
    phone: '+44 20 7946 0312',
    email: 'marcus@archetypelabs.dev',
    bio: 'Building distributed systems that don\'t wake me up at 3am. Rust evangelist, coffee snob, occasional chess player.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    name: 'Serena Okubo',
    title: 'Product Strategist',
    company: 'Forma Ventures',
    phone: '+81 3-1234-5678',
    email: 'serena@formavc.jp',
    bio: 'From seed to Series B — I help founders find the product-market inflection point before their runway disappears.',
    avatar: 'https://i.pravatar.cc/150?img=23',
  },
];

let nextId = SEED_CONTACTS.length + 1;

export default function App() {
  const [contacts, setContacts] = useState(SEED_CONTACTS);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addContact = (contact) => {
    setContacts((prev) => [{ ...contact, id: nextId++ }, ...prev]);
    setShowForm(false);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q)
    );
  });

  return (
    <div className="app">
      {/* ── Header ── */}
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <span className="header-label">Vol. I</span>
            <h1 className="header-title">Rolodex</h1>
            <span className="header-sub">The Digital Address Book</span>
          </div>
          <div className="header-right">
            <span className="contact-count">{contacts.length} cards</span>
            <button
              className={`btn-add ${showForm ? 'btn-add--active' : ''}`}
              onClick={() => setShowForm((v) => !v)}
            >
              {showForm ? '✕ Cancel' : '+ New Card'}
            </button>
          </div>
        </div>
        {/* Divider rule */}
        <div className="header-rule">
          <span className="rule-line" />
          <span className="rule-diamond">◆</span>
          <span className="rule-line" />
        </div>
      </header>

      <main className="main">
        {/* ── Form Drawer ── */}
        <div className={`form-drawer ${showForm ? 'form-drawer--open' : ''}`}>
          {showForm && <ContactForm onAdd={addContact} />}
        </div>

        {/* ── Search Bar ── */}
        <div className="search-bar">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search by name, company, or role…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear" onClick={() => setSearch('')}>
              ✕
            </button>
          )}
        </div>

        {/* ── Results Meta ── */}
        {search && (
          <p className="results-meta">
            Showing <strong>{filtered.length}</strong> of {contacts.length} cards
            {filtered.length === 0 && ' — no matches found'}
          </p>
        )}

        {/* ── Contact Grid ── */}
        <ContactList contacts={filtered} onDelete={deleteContact} />
      </main>

      <footer className="footer">
        <span>Rolodex © {new Date().getFullYear()}</span>
        <span className="footer-dot">·</span>
        <span>Built with React</span>
      </footer>
    </div>
  );
}
