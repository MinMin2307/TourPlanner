
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from "../../components/core/BackButton";
import UpdateButton from "../../components/core/UpdateButton";
import { getTour, updateTour } from "../../rest/tourApi";
import FormInput from '../../components/core/FormInput';
import Dropdown from '../../components/core/Dropdown';

const TourUpdatePage = () => {
    const { id } = useParams();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [type, setType] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const navigate = useNavigate();

    const navigateToTour = () => {
        navigate('/tour/' + id);
    };


    const fetchTour = async () => {
        try {
            const result = await getTour(id);
            console.log(result);
            setName(result.name);
            setDescription(result.description);
            setType(result.type);
            setFrom(result.from);
            setTo(result.to);
            console.log(result);
        } catch (error) {
            console.error('Error fetching tours', error);
        }
    };
    useEffect(() => {
        fetchTour();
    }, [id]);

    const updateData = () => {
        const data = {
            "name": name,
            "description": description,
            "from": from,
            "to": to,
            "type": type
        };
        const result = updateTour(id, data);
        fetchTour()
    };

    return (
        <div className="createTourPage">
            <BackButton title={"Back"} submit={navigateToTour} />
            <form>
                <h1 style={{ color: '#ffc0cb', fontWeight: 'bold', fontSize: '60px' }}>UPDATE TOUR</h1>
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

                <UpdateButton title={"Update Button"} submit={updateData} />
            </form>

        </div>
    );
};

export default TourUpdatePage;