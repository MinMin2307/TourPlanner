import React from "react";
import './formInput.css';

const Dropdown = ({ setValue, selectedValue }) => {
    return (
        <div className="formInput">
            <select name="tourDifficulty" id="tourDifficulty" onChange={(e) => setValue(e.target.value)} value={selectedValue}>
                <option value="" disabled>choose rating</option>
                <option value="1">Easy</option>
                <option value="2">Medium</option>
                <option value="3">Hard</option>
            </select>
        </div>
    );
};

export default Dropdown;
