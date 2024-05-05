import React, { useState } from 'react';
import './mange_request.css';

// Sample pickup requests data
const pickupRequestsData = [
  {
    id: 1,
    name: 'John Doe',
    phone: '123-456-7890',
    address: '123 Main St',
    email: 'john@example.com',
    time: '10:00 AM - 12:00 PM',
    rider: '', // Initially empty
    confirmed: false, // Initially not confirmed
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '987-654-3210',
    address: '456 Oak St',
    email: 'jane@example.com',
    time: '1:00 PM - 3:00 PM',
    rider: '', // Initially empty
    confirmed: false, // Initially not confirmed
  },
  // Add more pickup requests as needed
];

const ManageRequest = () => {
  const [requests, setRequests] = useState(pickupRequestsData);

  // Function to handle assigning a rider to a pickup request
  const assignRider = (requestId: number, riderId: string) => {
    setRequests(
      requests.map((request) =>
        request.id === requestId ? { ...request, rider: riderId } : request
      )
    );
  };

  // Function to handle confirming a pickup request
  const confirmPickup = (requestId: number) => {
    setRequests(
      requests.map((request) =>
        request.id === requestId ? { ...request, confirmed: true } : request
      )
    );
  };

  return (
    <div className="pickup-requests-container">
      <h1>Pickup Requests</h1>
      <table className="pickup-requests-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Available Time</th>
            <th>Rider</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.phone}</td>
              <td>{request.address}</td>
              <td>{request.email}</td>
              <td>{request.time}</td>
              <td>{request.rider || 'Not assigned'}</td>
              <td>
                {!request.confirmed && !request.rider && (
                  <button onClick={() => assignRider(request.id, 'rider1')}>
                    Assign Rider
                  </button>
                )}
                {!request.confirmed && request.rider && (
                  <button onClick={() => confirmPickup(request.id)}>
                    completed
                  </button>
                )}
                {request.confirmed && (
                  <p aria-disabled>Pickup completed</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRequest;
