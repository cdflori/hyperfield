const IncidentTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Incident</th>
                    <th>Description</th>
                    <th>User</th>
                    <th></th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.incidents.length > 0 ? (
                    props.incidents.map(incident => {
                        const {id, user, title, description} = incident;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>{user}</td>
                                <td>
                                    <button>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No incidents found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default IncidentTable;