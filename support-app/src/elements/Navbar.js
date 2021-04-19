// import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';
import { Navbar, Nav } from 'react-bootstrap';


const HomeNavbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Support App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">   
            
                {/* <Nav.Link to="/">Home</Nav.Link> */}
                {isLoggedIn() ?
                    <>
                        <p>Hello, {getProfile().email}</p>
                        <Nav.Link to='/content'>Content</Nav.Link>
                        <Nav.Link onClick={() => logout()} to='/'>Logout</Nav.Link>
                    </>
                    :
                    <>
                        {/* <Nav.Link href="/signup">Signup</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link> */}
                    </>
                }
                
            </Nav> 
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HomeNavbar;