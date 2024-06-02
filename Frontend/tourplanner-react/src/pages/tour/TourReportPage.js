import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTour, getTour } from '../../rest/tourApi';
import BackButton from '../../components/core/BackButton';
import { getAllTourlogs } from '../../rest/tourLogApi';
import { usePDF } from 'react-to-pdf';
import TourReport from '../../components/core/TourReport';
import DownloadButton from '../../components/core/DownloadButton';

const TourReportPage = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });


    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState(null);
    const [tourLogList, setTourLogList] = useState([]);


    const fetchTourLogList = async () => {
        try {
            const result = await getAllTourlogs(id);
            setTourLogList(result.tourLogList);
        } catch (error) {
            console.error('Error fetching tours:', error);
        }
    };
    useEffect(() => {
        fetchTourLogList();
    }, []);

    const toTour = () => {
        navigate('/tour/' + id)
    }

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const result = await getTour(id);
                setTour(result);
            } catch (error) {
                console.error('Error fetching tours', error);
            }
        };
        fetchTour();
    }, [id]);



    return (

        <div>
            <div>
                <BackButton title={"Back"} submit={toTour} />
                <DownloadButton title={"Download Report"} submit={() => toPDF()} />
            </div>

            <div ref={targetRef} style={{ marginTop: '40px', marginLeft: '160px' }}>
                <TourReport tour={tour} tourlogs={tourLogList} />
            </div>


        </div>
    );
};

export default TourReportPage;
