import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //delete api

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/services/${id}`).then((res) => {
      alert('service deleted');
      const remainingService = services.filter((service) => service._id !== id);
      setServices(remainingService);
    });
  };

  return (
    <div>
      <h2>manage services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          <button
            onClick={() => {
              handleDelete(service._id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
