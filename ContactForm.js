import React, { useState } from 'react';
import './ContactForm.css';

const EMPTY = {
  name: '',
  title: '',
  company: '',
  phone: '',
  email: '',
  bio: '',
  avatar: '',
};

export default function ContactForm({ onAdd }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Full name is required';
    if (!form.title.trim())   e.title   = 'Job title is required';
    if (!form.company.trim()) e.company = 'Company is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    onAdd({ ...form });
    setForm(EMPTY);
    setErrors({});
  };

  return (
    <form className="cf" onSubmit={handleSubmit} noValidate>
      <div className="cf__header">
        <span className="cf__label">New Contact</span>
        <h2 className="cf__title">Add a Card</h2>
      </div>

      <div className="cf__grid">
        {/* Full Name */}
        <div className={`cf__field cf__field--full ${errors.name ? 'cf__field--error' : ''}`}>
          <label className="cf__lbl">Full Name *</label>
          <input
            className="cf__input"
            type="text"
            placeholder="e.g. Serena Okubo"
            value={form.name}
            onChange={handleChange('name')}
          />
          {errors.name && <span className="cf__err">{errors.name}</span>}
        </div>

        {/* Job Title */}
        <div className={`cf__field ${errors.title ? 'cf__field--error' : ''}`}>
          <label className="cf__lbl">Job Title *</label>
          <input
            className="cf__input"
            type="text"
            placeholder="e.g. Creative Director"
            value={form.title}
            onChange={handleChange('title')}
          />
          {errors.title && <span className="cf__err">{errors.title}</span>}
        </div>

        {/* Company */}
        <div className={`cf__field ${errors.company ? 'cf__field--error' : ''}`}>
          <label className="cf__lbl">Company *</label>
          <input
            className="cf__input"
            type="text"
            placeholder="e.g. Archetype Labs"
            value={form.company}
            onChange={handleChange('company')}
          />
          {errors.company && <span className="cf__err">{errors.company}</span>}
        </div>

        {/* Email */}
        <div className={`cf__field ${errors.email ? 'cf__field--error' : ''}`}>
          <label className="cf__lbl">Email *</label>
          <input
            className="cf__input"
            type="email"
            placeholder="name@company.com"
            value={form.email}
            onChange={handleChange('email')}
          />
          {errors.email && <span className="cf__err">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="cf__field">
          <label className="cf__lbl">Phone</label>
          <input
            className="cf__input"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={handleChange('phone')}
          />
        </div>

        {/* Avatar URL */}
        <div className="cf__field">
          <label className="cf__lbl">Avatar URL</label>
          <input
            className="cf__input"
            type="url"
            placeholder="https://…"
            value={form.avatar}
            onChange={handleChange('avatar')}
          />
        </div>

        {/* Bio */}
        <div className="cf__field cf__field--full">
          <label className="cf__lbl">Bio / Description</label>
          <textarea
            className="cf__input cf__textarea"
            rows={3}
            placeholder="A short professional bio…"
            value={form.bio}
            onChange={handleChange('bio')}
          />
        </div>
      </div>

      <div className="cf__actions">
        <button className="cf__submit" type="submit">
          Add Contact Card ↗
        </button>
      </div>
    </form>
  );
}
