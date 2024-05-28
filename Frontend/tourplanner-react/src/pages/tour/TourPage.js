import React, { useEffect, useState } from 'react';
import Button from '../../components/core/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { getTour } from '../../rest/tourApi';

const TourPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
        try {
            const result = await getTour(id);
            setTour(result);
        } catch (error) {
            console.error('Error fetching tours', error);
        }
    };
    fetchTour();
}, [id]);

  return (
    <>
    {tour?.name}
    </>
  );
};

export default TourPage;
