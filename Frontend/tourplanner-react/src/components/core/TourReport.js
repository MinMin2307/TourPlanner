import TourLogReport from "./TourLogReport";

const TourReport = ({ tour, tourlogs }) => {

    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div>
                <h1>TOUR DETAILS OF '{tour?.name}'</h1>
                <p style={{ border: 'none' }}>Name: {tour?.name}</p>
                <p style={{ border: 'none' }}>Description: {tour?.description}</p>
                <p style={{ border: 'none' }}>From: {tour?.from} </p>
                <p style={{ border: 'none' }}>To: {tour?.to}</p>
                <p style={{ border: 'none' }}>Type: {tour?.type}</p>
                <p style={{ border: 'none' }}>Distance: {tour?.distance}m</p>
                <p style={{ border: 'none' }}>Estimated time: {tour?.estimatedTime}s</p>
            </div>
            <div>
                <h1>TOUR LOGS</h1>
                <TourLogReport tourLogs={tourlogs} />
            </div>
        </div>
    );
};

export default TourReport;
