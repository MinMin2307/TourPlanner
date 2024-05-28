import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateButton from '../../components/core/CreateButton';
import { getAllTours } from '../../rest/tourApi';

const TourListPage = () => {

  const [tourList, setTourList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTourList = async () => {
        try {
            const result = await getAllTours();
            setTourList(result.tourList);
        } catch (error) {
            console.error('Error fetching tours:', error);
        }
    };
    fetchTourList();
}, [tourList]);

  const toCreateTour = () => {
    navigate('/tour/create');
  };

  const navigateToTour = (id) =>{
    navigate('/tour/'+id);
  }; 

  return (
    <div>
      <CreateButton title="New Tour" submit={toCreateTour} />
      <h1>Tour List</h1>
      {tourList.map((tour) => (
          <li onClick={() =>navigateToTour(tour.id)} key={tour.id}>{tour.name}</li>
        ))}
    </div>
  );
};

export default TourListPage;
