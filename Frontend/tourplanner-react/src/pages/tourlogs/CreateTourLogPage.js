import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../components/core/BackButton";
import { createTourlog } from "../../rest/tourLogApi";
import FormInput from "../../components/core/FormInput";
import DropdownDifficulty from "../../components/core/DropdownDifficulty";
import DropdownRating from "../../components/core/DropdownRating";
import CreateButton from "../../components/core/CreateButton";


const CreateTourLogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("minnie");
  const [difficulty, setDifficulty] = useState("3");
  const [totalDistance, setTotalDistance] = useState("4342");
  const [totalTime, setTotalTime] = useState("32432432");
  const [rating, setRating] = useState("2");

  const toTourPage = () => {
    navigate('/tour/'+id);
  }
  const handleSubmit = () => {
    const data = {
      "tourId": id,
      "comment": comment,
      "difficulty": difficulty,
      "totalDistance": totalDistance,
      "totalTime": totalTime,
      "rating": rating
    };
    console.log(data);
    const result = createTourlog(data);
    console.log(result);
  }

 

  return (
    <div className="createTourPage">
      <BackButton title={"Back"} submit={toTourPage}/>
      <form>
      <h1 style={{ color: '#ffc0cb', fontWeight: 'bold', fontSize: '60px'}}>CREATE TOURLOG</h1>
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
        <CreateButton title={"Create Tourlog"} submit={handleSubmit}/>

      </form>

    </div>
  );
  
};

export default CreateTourLogPage;

