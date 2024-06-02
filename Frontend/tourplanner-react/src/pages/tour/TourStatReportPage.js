import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTour } from '../../rest/tourApi';
import BackButton from '../../components/core/BackButton';
import { getAllTourlogs } from '../../rest/tourLogApi';
import { usePDF } from 'react-to-pdf';
import DownloadButton from '../../components/core/DownloadButton';

const TourStatReportPage = () => {
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

    const getAverageTime = () => {
        let index = 0;
        let time = 0;
        if (tour) {
            time = tour.estimatedTime;
            index++;
        }
        if (tourLogList) {
            for (const tourLog of tourLogList) {
                time += tourLog.totalTime;
                index++;
            }
        }

        return Math.round(time / index * 100) / 100;
    }
    const getAverageDistance = () => {
        let index = 0;
        let distance = 0;
        if (tour) {
            distance = tour.distance;
            index++;
        }
        if (tourLogList) {
            for (const tourLog of tourLogList) {
                distance += tourLog.totalDistance;
                index++;
            }
        }
        return Math.round(distance / index * 100) / 100;

    }
    const getAverageRating = () => {
        let index = 0;
        let rating = 0;
        if (tourLogList) {
            for (const tourLog of tourLogList) {
                rating += tourLog.rating;
                index++;
            }
        }
        return Math.round(rating / index * 100) / 100;
    }
    const getAverageDifficulty = () => {
        console.log(tourLogList);
        let index = 0;
        let difficulty = 0;
        if (tourLogList) {
            for (const tourLog of tourLogList) {
                difficulty += tourLog.difficulty;
                index++;
            }
        }
        return Math.round(difficulty / index * 100) / 100;
    }



    return (

        <div>
            <div>
                <BackButton title={"Back"} submit={toTour} />
                <DownloadButton title={"Download Report"} submit={() => toPDF()} />
            </div>

            <div ref={targetRef} style={{ marginTop: '40px', marginLeft: '300px' }}>
                <h1>TOUR STATS OF '{tour?.name}'</h1>

                <table>
                    <thead>
                        <tr>
                            <th style={{ minWidth: '100px', textAlign: 'center' }}>
                                Difficulty
                            </th>
                            <th style={{ minWidth: '100px', textAlign: 'center' }}>
                                Total Distance
                            </th>
                            <th style={{ minWidth: '100px', textAlign: 'center' }}>
                                Total Time
                            </th>
                            <th style={{ minWidth: '100px', textAlign: 'center' }}>
                                Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ minWidth: '100px', textAlign: 'center' }}>
                                {getAverageDifficulty()} of 3
                            </td>
                            <td style={{ minWidth: '100px', textAlign: 'center' }}>
                                {getAverageDistance()} m
                            </td>
                            <td style={{ minWidth: '100px', textAlign: 'center' }}>
                                {getAverageTime()} s
                            </td>
                            <td style={{ minWidth: '100px', textAlign: 'center' }}>
                                {getAverageRating()} stars
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TourStatReportPage;
