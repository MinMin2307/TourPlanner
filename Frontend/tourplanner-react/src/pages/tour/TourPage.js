import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTour, getTour } from '../../rest/tourApi';
import CreateButton from '../../components/core/CreateButton';
import BackButton from '../../components/core/BackButton';
import { getAllTourlogs } from '../../rest/tourLogApi';
import DeleteButton from '../../components/core/DeleteTourButton';
import TourLogView from '../../components/core/TourLogView';
import UpdateButton from '../../components/core/UpdateButton';

const TourPage = () => {

  
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [tourLogList, setTourLogList] = useState([]);


  const fetchTourLogList = async () => {
    try {
      const result = await getAllTourlogs(id);
      setTourLogList(result.tourLogList);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };
  useEffect(() => {
    fetchTourLogList();
  }, []);

  const toTourListPage = () => {
    navigate('/')
  }

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

  const doDeleteTour = async () => {
    try {
      const result = await deleteTour(id);
      toTourListPage();
    } catch (error) {
      console.error('Error deleting tour', error);
    }
  };

 const toUpdateTour = () => {
    navigate('/tour/' + id + '/update')
 }

  const toCreateTourlog = () => {
    navigate('/tour/' + id + '/log/create')
  }
  const navigateToTourLog = (id) => {
    navigate('/tour/' + id);
  };


  return (

    <div>
      <BackButton title={"Back"} submit={toTourListPage} />
      <CreateButton title={"Create TourLog"} submit={toCreateTourlog} />
      

      <div className="formInput" style={{ display: 'flex' }}>
      <li style={{listStyle: 'none', transform:'none', marginTop: '100px', marginLeft: '20px', backgroundColor: '#fcdae0'}}>
        <h1>TOUR DETAILS</h1>
        <p>Name: {tour?.name}</p>
        <p>Description: {tour?.description}</p>
        <p>From: {tour?.from} </p>
        <p>To: {tour?.to}</p>
        <p>Type: {tour?.type}</p>
        <p>Distance: {tour?.distance}m</p>
        <p>Estimated time: {tour?.estimatedTime}s</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'flex-end' }}>
          <DeleteButton title={"Delete"} submit={doDeleteTour} />
          <UpdateButton title={"Update"} submit={toUpdateTour}/>
        </div>
      </li>
     
      </div>

      <ul>
        {tourLogList.map((tourlogEntry, index) => (
          <li style={{transitionDuration: 'none', transform:'none'}}>
            <h1>TOURLOG DETAILS</h1>
            <TourLogView key={index} tourId={id} tourlog={tourlogEntry} reload={fetchTourLogList} />
          </li>
        ))}
      </ul>



    </div>
  );
};

export default TourPage;
