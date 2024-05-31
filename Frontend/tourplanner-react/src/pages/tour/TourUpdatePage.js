
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from "../../components/core/BackButton";
import UpdateButton from "../../components/core/UpdateButton";
import { updateTour } from "../../rest/tourApi";
import FormInput from '../../components/core/FormInput';
import Dropdown from '../../components/core/Dropdown';

const TourUpdatePage = () => {
    const { id } = useParams();
    const [name, setName] = useState("loooool");
    const [description, setDescription] = useState("test");
    const [type, setType] = useState("BIKE");
    const [from, setFrom] = useState("Mexikoplatz 2, 1020 Wien");
    const [to, setTo] = useState("Weißenböckstraße 4, 1110 Wien");
    const navigate = useNavigate();

    const navigateToTour = () =>{
        navigate('/tour/'+id);
    }; 

    const updateData = () => {
        const data = {
            "name": name,
            "description": description,
            "from": from,
            "to": to,
            "type": type
        };
        console.log(data);
        const result = updateTour(id, data);
        console.log(result);
    };

    return (
        <div className="createTourPage">
            <BackButton title={"Back"} submit={navigateToTour}/>
            <form>
                <h1 style={{ color: '#ffc0cb', fontWeight: 'bold', fontSize: '60px'}}>UPDATE TOUR</h1>
                <FormInput
                    placeholder='tour name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                 />
                <FormInput
                    placeholder='tour description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Dropdown
                    setValue={setType}
                />
                <FormInput
                 placeholder='start'
                 value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
                <FormInput
                 placeholder='end'
                 value={to}
                  onChange={(e) => setTo(e.target.value)}
                />

                <UpdateButton title={"Update Button"} submit={updateData}/>
            </form>

        </div>
    );
};

export default TourUpdatePage;