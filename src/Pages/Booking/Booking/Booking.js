import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1>details of</h1>
      <br />
      <h2> {service.name}</h2>
      <h2> price: ${service.price}</h2>
      <img src={service.img} alt="" />
    </div>
  );
};

export default Booking;
