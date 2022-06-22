import { Navbar,Container,Nav,NavLink } from 'react-bootstrap';

function Header( {handleLogout, me } ){

    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand >
            <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Caduceus.svg/170px-Caduceus.svg.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Patient Portal
            </Navbar.Brand>
                <Nav className="me-auto" >
                <NavLink href='/'>Home</NavLink>
                {/* <NavLink href='/login'>Login</NavLink>
                <NavLink onClick={handleLogout}>Logout</NavLink> */}
                {me.id?<NavLink href='/prescriptions'>My Prescriptions</NavLink>:null}
                {me.id?<NavLink onClick={handleLogout}>Logout</NavLink>:<NavLink href='/login'>Login</NavLink>}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;