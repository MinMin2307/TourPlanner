import React from "react";
import './formInput.css';

const Dropdown = ({ setValue }) => {
    return (
        <div className="formInput">
            <select name="tourType" id="tourType" onChange={(e) => setValue(e.target.value)}>
        
                <option value="BIKE">Bike</option>
                <option value="HIKE">Hike</option>
                <option value="RUNNING">Running</option>
                <option value="VACATION">Vacation</option>
            </select>
        </div>
    );
};

export default Dropdown;
