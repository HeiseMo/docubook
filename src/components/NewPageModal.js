import React, { useState } from 'react';

function NewPageModal({ isOpen, onClose, onCreatePage }) {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePage(id, title);
    setTitle('');
    setId('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create New Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pageId">Page ID:</label>
            <input
              type="text"
              id="pageId"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="pageTitle">Page Title:</label>
            <input
              type="text"
              id="pageTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit">Create</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPageModal;