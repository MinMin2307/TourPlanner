import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getTourLog, updateTourLog } from "../../rest/tourLogApi";
import BackButton from "../../components/core/BackButton";
import UpdateButton from "../../components/core/UpdateButton";
import DropdownRating from "../../components/core/DropdownRating";
import DropdownDifficulty from "../../components/core/DropdownDifficulty";
import FormInput from "../../components/core/FormInput";


const UpdateTourLogPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tourLogId } = useParams();
  const [comment, setComment] = useState();
  const [difficulty, setDifficulty] = useState();
  const [totalDistance, setTotalDistance] = useState();
  const [totalTime, setTotalTime] = useState();
  const [rating, setRating] = useState();

  const fetchTourLog = async () => {
    try {
      const result = await getTourLog(tourLogId);
      console.log(result);
      setComment(result.comment);
      setDifficulty(result.difficulty);
      setTotalDistance(result.totalDistance);
      setTotalTime(result.totalTime);
      setRating(result.rating);
      console.log(result);
    } catch (error) {
      console.error('Error fetching tours', error);
    }
  };
  useEffect(() => {
    fetchTourLog();
  }, [tourLogId]);

  const updateTourLogData = () => {
    const data = {

      "comment": comment,
      "difficulty": difficulty,
      "totalDistance": totalDistance,
      "totalTime": totalTime,
      "rating": rating
    };
    const result = updateTourLog(tourLogId, data);
    fetchTourLog();

  }

  const toTourPage = () => {
    navigate('/tour/' + id);
  }

  return (
    <div className="createTourPage">
      <BackButton title={"Back"} submit={toTourPage} />
      <form>
        <h1 style={{ color: '#ffc0cb', fontWeight: 'bold', fontSize: '60px' }}>UPDATE TOURLOG</h1>

        <FormInput
          placeholder={'comment'}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <DropdownDifficulty
          placeholder={'choose difficulty'}
          setValue={setDifficulty}
          selectedValue={difficulty}
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
          selectedValue={rating}
        />
        <UpdateButton title={"Update Tourlog"} submit={updateTourLogData} />

      </form>

    </div>
  );
};

export default UpdateTourLogPage;