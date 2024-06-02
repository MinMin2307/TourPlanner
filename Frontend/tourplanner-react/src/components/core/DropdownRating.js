import React from "react";
import './formInput.css';

const Dropdown = ({ setValue, selectedValue }) => {
    return (
        <div className="formInput">
            <select name="tourRating" id="tourRating" onChange={(e) => setValue(e.target.value)} value={selectedValue}>
                <option value="" disabled>choose rating</option>
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
