import React, { useState } from 'react';
import './add_rider.css';

const AddRider = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [operatingArea, setOperatingArea] = useState('');
  const [licenseFile, setLicenseFile] = useState<File | null>(null);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic here to handle form submission, like sending data to server
    console.log('Form submitted:', { name, mobile, email, address, operatingArea, licenseFile });
  };

  // Function to handle license file change
  const handleLicenseFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setLicenseFile(e.target.files[0]); // Set the first selected file
    }
  };

  return (
    <div className="add-rider-container">
      <h1>Add New Rider</h1>
      <form onSubmit={handleSubmit} className="add-rider-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="operatingArea">Operating Area:</label>
          <input type="text" id="operatingArea" value={operatingArea} onChange={(e) => setOperatingArea(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="licenseFile">Driving License PDF:</label>
          <input type="file" id="licenseFile" onChange={handleLicenseFileChange} accept=".pdf" required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddRider;
