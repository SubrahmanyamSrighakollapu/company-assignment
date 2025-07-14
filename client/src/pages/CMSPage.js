import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CMSPage() {
  const [text, setText] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/heading`)
      .then((res) => setText(res.data.text))
      .catch((err) => console.error('Error fetching heading:', err));
  }, []);

  const handleSubmit = () => {
    if (!text.trim()) {
      alert('Heading cannot be empty');
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/heading`, { text })
      .then(() => alert('Heading updated successfully!'))
      .catch((err) => console.error('Error updating heading:', err));
  };

  return (
    <div className="container py-5 min-vh-100 d-flex justify-content-center align-items-center bg-white">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">CMS Editor</h2>

        <div className="mb-3">
          <label htmlFor="headingInput" className="form-label">
            Landing Page Heading
          </label>
          <textarea
            id="headingInput"
            className="form-control"
            rows="4"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter new landing heading"
          />
        </div>

        <div className="d-grid">
          <button onClick={handleSubmit} className="btn btn-success">
            Save Heading
          </button>
        </div>
      </div>
    </div>
  );
}

export default CMSPage;
