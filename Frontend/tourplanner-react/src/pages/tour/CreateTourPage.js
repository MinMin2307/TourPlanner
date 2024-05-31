import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTour } from '../../rest/tourApi';

import FormInput from '../../components/core/FormInput';
import BackButton from '../../components/core/BackButton';
import './createTour.css';
import Dropdown from '../../components/core/Dropdown';
import CreateButton from '../../components/core/CreateButton';

const CreateTourPage = () => {
  const [name, setName] = useState("minnie");
  const [description, setDescription] = useState("test");
  const [type, setType] = useState("BIKE");
  const [from, setFrom] = useState("Mexikoplatz 1, 1020 Wien");
  const [to, setTo] = useState("Weißenböckstraße 4, 1110 Wien");

  const navigate = useNavigate();
  const toTourListPage = () => {
    navigate('/')
  }

  const handleSubmit = () => {
    const data = {
      "name": name,
      "description": description,
      "from": from,
      "to": to,
      "type": type
    };
    console.log(data);
    const result = createTour(data);
    console.log(result);
  };

  return (
    <div className='createTourPage'>
      <BackButton title={"Back"} submit={toTourListPage} />
      <form>
        <h1 style={{ color: '#ffc0cb', fontWeight: 'bold', fontSize: '60px'}}>CREATE TOUR</h1>
        <FormInput
          placeholder='tour name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          placeholder='tour description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Dropdown
          setValue={setType}
        />
        <FormInput
          placeholder='start'
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <FormInput
          placeholder='end'
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      
      <CreateButton title={"Create Tour"} submit={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateTourPage;
