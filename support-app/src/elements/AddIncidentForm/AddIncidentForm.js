import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

const AddIncidentForm = (props) => {

    const initIncident = {id: null, title: '', requestName: '', date: ''};

    const [incident, setIncident] = useState(initIncident);

    const handleChange = e => {
        const {name, value} = e.target;
        setIncident({...incident, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(incident.title && incident.requestName && incident.date) {
            handleChange(e, props.addIncident(incident))
        }
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control className="u-full-width" type="text" name='title' value={incident.title} />
                <br/>
                <Form.Label>Request Name</Form.Label>
                <Form.Control className="u-full-width" type="text" name='requestName' value={incident.requestName} />
                <br/>
                <Form.Label>Date</Form.Label>
                <Form.Control className="u-full-width" type="text" name='date' value={incident.date} />
                <br/>
                <Button className='createIncidentBtn' type="submit" onClick={handleSubmit}>Create Incident</Button>
            </Form.Group>
        </Form>
    )
}

export default AddIncidentForm;