import React from "react";

import { deleteTourLog } from "../../rest/tourLogApi";
import { useNavigate } from "react-router-dom";
import DeleteTourLogButton from "./DeleteTourButton"
import UpdateTourLogButton from "./UpdateButton";


const TourLogView = (props) => {
    const navigate = useNavigate();

    const doDeleteTourLog = async () => {
        try {
            const result = await deleteTourLog(props.tourlog.id);
            props.reload();
            toTourPage();
        } catch (error) {
            console.error('Error deleting tour', error);
        }
    }

    
const toTourPage = () => {
    navigate('/tour/'+props.tourId)
  }

    return (
        <div style={{ display: 'flex' }}>
            <div style={{justifyContent:'flex-start'}}>
                <span>
                    <p>Comment: {props.tourlog?.comment}</p>
                    <p>difficulty: {props.ourlog?.difficulty}</p>
                    <p>totalDistance: {props.tourlog?.totalDistance}</p>
                    <p>totalTime: {props.tourlog?.totalTime}</p>
                    <p>rating: {props.tourlog?.rating} Stars</p>
                </span>
            </div>
            <div style={{justifyContent:"flex-end"}}>
                <DeleteTourLogButton title={"Delete"} submit={doDeleteTourLog} style={{width:'150px'}}/>
                <UpdateTourLogButton title={"Update"} submit={doDeleteTourLog} style={{width:'150px', marginTop: '10px'}}/>

            </div>
        </div>
    );
};

export default TourLogView;
