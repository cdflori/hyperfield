import { useEffect, useState } from 'react';
import axios from 'axios';
import ContentForm from '../elements/ContentForm';

const Content = function () {
    const [content, setContent] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new note!
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch notes again.
    useEffect(() => {
        fetchContent();
    }, [refresh]);

    // Check out that include!
    async function fetchContent() {
        const { data } = await axios.get('/api/content?include=User');
        setContent(data);
    }
    return (
        <div>
            <h2>Content</h2>
            <ol>
                {content.map(note => {
                    return (
                        <li key={content.id}>
                            <strong>{content.title}</strong> {content.body} <sub>from: {content.User.email}</sub>
                        </li>
                    );
                })}
            </ol>
            <ContentForm didSubmit={refreshParent} />
        </div>
    );
};

export default Content;