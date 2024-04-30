import React, { useState } from 'react';
import './admin_blog.css';

const AdminBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', JSON.stringify(formData)); 
    try {
      const response = await fetch('http://192.168.31.9:91/api/blog/BlogInsert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.status === 201) {
        console.log('Form submitted successfully');
        const data = await response.json();
        console.log('Response data:', data);
        setFormData({ title: '', description: '', photo: '' });
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString().split(',')[1];
        setFormData({ ...formData, photo: base64String || '' });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pickup-form">
      <h1 className="titleName">Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label>
          Description:
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <label>
          Photo:
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminBlog;
