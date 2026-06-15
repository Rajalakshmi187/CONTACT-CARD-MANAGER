import React, { useState } from 'react';
import './ContactCard.css';

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

// Deterministic accent color from name
const ACCENTS = ['#c9a84c', '#b85c38', '#6b7f6e', '#5b7fa6', '#8b6ea6', '#a66b6b'];
function accentFor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffff;
  return ACCENTS[h % ACCENTS.length];
}

export default function ContactCard({ contact, onDelete }) {
  const { id, name, title, company, phone, email, bio, avatar } = contact;
  const [imgErr, setImgErr] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const accent = accentFor(name);

  const handleDelete = () => {
    setDeleting(true);
    setTimeout(() => onDelete(id), 350);
  };

  return (
    <article
      className={`cc ${deleting ? 'cc--deleting' : ''}`}
      style={{ '--accent': accent }}
    >
      {/* Top accent stripe */}
      <div className="cc__stripe" />

      {/* Delete button */}
      <button className="cc__delete" onClick={handleDelete} title="Remove card">
        ✕
      </button>

      {/* Avatar + Identity */}
      <div className="cc__top">
        <div className="cc__avatar-wrap">
          {avatar && !imgErr ? (
            <img
              className="cc__avatar-img"
              src={avatar}
              alt={name}
              onError={() => setImgErr(true)}
            />
          ) : (
            <div className="cc__avatar-initials">{getInitials(name)}</div>
          )}
        </div>

        <div className="cc__identity">
          <h3 className="cc__name">{name}</h3>
          <p className="cc__role">
            <span className="cc__title">{title}</span>
            <span className="cc__separator"> at </span>
            <span className="cc__company">{company}</span>
          </p>
        </div>
      </div>

      {/* Bio */}
      {bio && <p className="cc__bio">{bio}</p>}

      {/* Divider */}
      <div className="cc__divider" />

      {/* Contact details */}
      <div className="cc__details">
        {email && (
          <a className="cc__detail" href={`mailto:${email}`}>
            <span className="cc__detail-icon">✉</span>
            <span className="cc__detail-text">{email}</span>
          </a>
        )}
        {phone && (
          <a className="cc__detail" href={`tel:${phone}`}>
            <span className="cc__detail-icon">☏</span>
            <span className="cc__detail-text">{phone}</span>
          </a>
        )}
      </div>
    </article>
  );
}
