import React from "react";
import './formInput.css';

const Dropdown = ({ setValue }) => {
    return (
        <div className="formInput">
            <select name="tourDifficulty" id="tourDifficulty" onChange={(e) => setValue(e.target.value)}>
                <option value="1">1 Star</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star</option>
            </select>
        </div>
    );
};

export default Dropdown;
