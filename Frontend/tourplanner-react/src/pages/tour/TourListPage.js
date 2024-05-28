import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateButton from '../../components/core/CreateButton';

const TourListPage = () => {

  const navigate = useNavigate();

  const toCreateTour = () => {
    navigate('/tour/create');
  };

  return (
    <div>
      <CreateButton title="New Tour" submit={toCreateTour} />
      <h1>Tour List</h1>
    </div>
  );
};

export default TourListPage;
