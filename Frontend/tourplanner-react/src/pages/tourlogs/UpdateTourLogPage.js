import React, {useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {updateTourLog} from "../../rest/tourLogApi";
import BackButton from "../../components/core/BackButton";
import UpdateButton from "../../components/core/UpdateButton";
import DropdownRating from "../../components/core/DropdownRating";
import DropdownDifficulty from "../../components/core/DropdownDifficulty";
import FormInput from "../../components/core/FormInput";


const UpdateTourLogPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [comment, setComment] = useState("keinBockMehr");
    const [difficulty, setDifficulty] = useState("3");
    const [totalDistance, setTotalDistance] = useState("4342");
    const [totalTime, setTotalTime] = useState("32432432");
    const [rating, setRating] = useState("2");


    const updateTourLogData = () => {
        const data = {
            "comment": comment,
            "difficulty": difficulty,
            "totalDistance": totalDistance,
            "totalTime": totalTime,
            "rating": rating
        };
        console.log(data)
        const result = updateTourLog(id, data);
        console.log(result);
    }

    const toTourPage = () => {
        navigate('/tour/'+id);
      }

    return (
        <div className="createTourPage">
          <BackButton title={"Back"} submit={toTourPage}/>
          <form>
          <h1 style={{ color: '#ffc0cb', fontWeight: 'bold', fontSize: '60px'}}>UPDATE TOURLOG</h1>
                <FormInput
                value={id}
                onChange={()=>{}}
            />
            <FormInput
              placeholder={'comment'}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <DropdownDifficulty 
              setValue={setDifficulty}
            />
            <FormInput
              placeholder={'total distance'}
              value={totalDistance}
              onChange={(e) => setTotalDistance(e.target.value)}
            />
            <FormInput
              placeholder={'total time'}
              value={totalTime}
              onChange={(e) => setTotalTime(e.target.value)}
            />
            <DropdownRating
              setValue={setRating}
            />
            <UpdateButton title={"Update Tourlog"} submit={updateTourLogData}/>
    
          </form>
    
        </div>
    );
};

export default UpdateTourLogPage;