import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/services', data)
      .then((res) => {
        if (res.data.insertedId) {
          alert('added successfully');
          //   useForm({ deepNest: { file: new File() } });
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="add-service">
      <h2>add a service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          required
          {...register('name', { required: true, maxLength: 20 })}
        />

        <textarea placeholder="description" {...register('description')} />
        <input placeholder="price" type="number" {...register('price')} />
        <input placeholder="image url" {...register('img')} />
        {/* 
        <input
          type="file"
          {...register('img')}
          className="profile_picture_file_input"
          id="profile_picture_file_upload"
        /> */}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
<h2>add a service</h2>;
