import React, { useState } from 'react';
import { ImCross } from 'react-icons/im'; // Import the cross icon from react-icons library
import './pickup.css'; // Import your CSS file for styling

const PickupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    productType: [] as string[], // Explicitly define the type as string array
    comments: ''
  });
  const [selectedCars, setSelectedCars] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const carOptions = ["Volvo", "Saab", "Mercedes", "Audi"]; // Array containing all car options

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleAdd = () => {
    if (selectedOption && !selectedCars.includes(selectedOption)) {
      setSelectedCars([...selectedCars, selectedOption]);
    }
    setSelectedOption('');
  };

  const handleRemove = (car: string) => {
    setSelectedCars(selectedCars.filter(item => item !== car));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="pickup-form">
      <img src="/path/to/your/logo.png" alt="Your Logo" className="logo" />
      <h1>Pickup Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Pickup Date:
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Pickup Time:
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="cars">Materail Type:</label>
        <select name="cars" id="cars" value={selectedOption} onChange={handleChange}>
          <option value="">Select material</option>
          {carOptions.map((car, index) => (
            <option key={index} value={car.toLowerCase()}>{car}</option>
          ))}
        </select>
        <button onClick={handleAdd}>Add</button>
        <div>
          <h2>Selected material:</h2>
          <ul>
            {selectedCars.map((car, index) => (
              <li key={index}>
                {`${index + 1}) ${car}`}
                <button onClick={() => handleRemove(car)}><ImCross /></button>
              </li>
            ))}
          </ul>
        </div>
        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </label>
        <button className='subBtn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PickupForm;
