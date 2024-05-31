import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateButton from '../../components/core/CreateButton';
import { getAllTours } from '../../rest/tourApi';
import './list.css'
import DeleteButton from '../../components/core/DeleteTourButton';

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
}, []);

  const toCreateTour = () => {
    navigate('/tour/create');
  };

  const navigateToTour = (id) =>{
    navigate('/tour/'+id);
  }; 

  return (
    <div>
      <CreateButton title="New Tour" submit={toCreateTour} />
      <h1 style={{color: '#ffc0cb', marginLeft: '5px', fontSize: '50px'}}>Tour List</h1>
      <ul>
        {tourList.map((tour) => (
          <li onClick={() =>navigateToTour(tour.id)} key={tour.id}>{tour.name} <p style={{borderStyle:'none'}}>Klick to view details</p></li>
        ))}
      </ul>
    </div>
  );
};

export default TourListPage;
