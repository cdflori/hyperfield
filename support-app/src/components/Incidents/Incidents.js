import './style.css';
import { useState } from 'react';
import incidentList from '../../data.js';
import IncidentTable from '../../elements/Tables/IncidentTable';
import AddIncidentForm from '../../elements/AddIncidentForm/AddIncidentForm'
import { Row } from 'react-bootstrap';
const Incidents = () => {

    const [incidents, setIncidents] = useState(incidentList)

    const addIncident = incident => {
        incident.id = incidents.length + 1;
        setIncidents([...incidents, incident])
    }

    return (
        <div className='container'>
        <h1>Incidents</h1>
        <br/>
            <Row>
                <div>
                    <h2>Create New Incident Report</h2>
                    <AddIncidentForm addIncident={addIncident} />
                </div>
            </Row>
            <Row>
                <br/>
                <div>
                    <h2>View users</h2>
                    <IncidentTable incidents={incidents} />
                </div>
            </Row>
        </div>
    )
}

export default Incidents;
