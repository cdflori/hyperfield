import { useState } from 'react';
import axios from 'axios';

const ContentForm = (props) => {
    const { didSubmit } = props;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        submitContent();
    };
    const submitContent = async () => {
        await axios.post('/api/content', { title: title, body: body });
        setBody('');
        setTitle('');
        didSubmit();
    };

    return (
        <div>
            <h2>Content Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    name='title'
                    placeholder='title'
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <br />
                <label htmlFor="body">Body:</label>
                <textarea
                    name='body'
                    placeholder='body'
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
                <br />
                <button type='submit'>Save Content</button>
            </form>
        </div>
    );
};

export default ContentForm;