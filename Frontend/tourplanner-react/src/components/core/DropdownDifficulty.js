import React from "react";
import './formInput.css';

const Dropdown = ({ setValue }) => {
    return (
        <div className="formInput">
            <select name="tourDifficulty" id="tourDifficulty" onChange={(e) => setValue(e.target.value)}>
                <option value="1">Easy</option>
                <option value="2">Medium</option>
                <option value="3">Hard</option>
            </select>
        </div>
    );
};

export default Dropdown;
