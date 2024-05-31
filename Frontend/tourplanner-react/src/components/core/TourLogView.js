import React from "react";
import './formInput.css';
import { deleteTourLog } from "../../rest/tourLogApi";
import { useNavigate, useParams } from "react-router-dom";
import DeleteTourLogButton from "./DeleteTourButton"
import UpdateTourLogButton from "./UpdateButton";


const TourLogView = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();


    const doDeleteTourLog = async () => {
        try {
            const result = await deleteTourLog(props.tourlog.id);
            props.reload();
            toTourPage();
        } catch (error) {
            console.error('Error deleting tour', error);
        }
    }

    const toUpdateTourLog = () => {
        navigate('/tour/'+ id+ '/log/update')
    }

    

    
const toTourPage = () => {
    navigate('/tour/'+props.tourId)
  }

    return (
        <div className="formInput" style={{ display: 'flex' }}>
            <div style={{justifyContent:'flex-start'}}>
                <span>
                    <p>Comment: {props.tourlog?.comment}</p>
                    <p>difficulty: {props.tourlog?.difficulty}</p>
                    <p>totalDistance: {props.tourlog?.totalDistance}</p>
                    <p>totalTime: {props.tourlog?.totalTime}</p>
                    <p>rating: {props.tourlog?.rating} Star</p>
                </span>
            </div>
            <div style={{ display: 'flex', flexDirection:'column', marginLeft: '5px'}}>
                <DeleteTourLogButton title={"Delete"} submit={doDeleteTourLog} style={{width:'150px', backgroundColor: '#d16b7d',  borderColor: 'white'}}/>
                <UpdateTourLogButton title={"Update"} submit={toUpdateTourLog} style={{width:'150px', marginTop: '10px', backgroundColor: '#d16b7d',  borderColor: 'white'}}/>

            </div>
        </div>
    );
};

export default TourLogView;
