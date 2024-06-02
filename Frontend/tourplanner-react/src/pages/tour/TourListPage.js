import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateButton from '../../components/core/CreateButton';
import { getAllTours } from '../../rest/tourApi';
import './list.css'
import DeleteButton from '../../components/core/DeleteTourButton';
import './createTour.css';


const TourListPage = () => {

  const [tourList, setTourList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const fetchTourList = async () => {
    try {
      const result = await getAllTours();
      setTourList(result.tourList);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };
  useEffect(() => {
    fetchTourList();
  }, []);

  const toCreateTour = () => {
    navigate('/tour/create');
  };

  const navigateToTour = (id) => {
    navigate('/tour/' + id);
  };

  const getFileteredTours = () => {
    let filteredTours = [];
    for (const tour of tourList) {
      if (searchTerm && searchTerm.length >= 1) {
        if (tour.name.toLowerCase().includes(searchTerm)) {
          filteredTours.push(tour);
        }
      } else {
        filteredTours.push(tour);
      }
    }
    return filteredTours;
  }

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <CreateButton title="New Tour" submit={toCreateTour} />
      <h1 style={{ color: '#ffc0cb', marginLeft: '5px', fontSize: '50px' }}>Tour List</h1>

      <input
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder='Search tours'
      />

      <ul>
        {getFileteredTours().map((tour) => (
          <li onClick={() => navigateToTour(tour.id)} key={tour.id}>{tour.name} <p style={{ borderStyle: 'none', fontSize: '12px' }}>Klick to view details</p></li>
        ))}
      </ul>
    </div>
  );
};

export default TourListPage;
