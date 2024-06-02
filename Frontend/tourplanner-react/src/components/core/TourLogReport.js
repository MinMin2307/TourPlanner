
const TourLogReport = ({ tourLogs }) => {

    return (
        <div>
            <table>
                <tr>
                    <th style={{minWidth: '100px', textAlign:'center'}}>
                        Comment
                    </th>
                    <th style={{minWidth: '100px', textAlign:'center'}}>
                        Difficulty
                    </th>
                    <th style={{minWidth: '100px', textAlign:'center'}}>
                        Total Distance
                    </th>
                    <th style={{minWidth: '100px', textAlign:'center'}}>
                        Total Time
                    </th>
                    <th style={{minWidth: '100px', textAlign:'center'}}>
                        Rating
                    </th>
                </tr>
                {tourLogs.map((tourlog) => (
                    <tr>
                        <td style={{minWidth: '100px', textAlign:'center'}}>
                            {tourlog.comment}
                        </td>
                        <td style={{minWidth: '100px', textAlign:'center'}}>
                            {tourlog.difficulty}
                        </td>
                        <td style={{minWidth: '100px', textAlign:'center'}}>
                            {tourlog.totalDistance}
                        </td>
                        <td style={{minWidth: '100px', textAlign:'center'}}>
                            {tourlog.totalTime}
                        </td>
                        <td style={{minWidth: '100px', textAlign:'center'}}>
                            {tourlog.rating}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default TourLogReport;
