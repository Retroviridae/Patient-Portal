import { Navbar,Container,Nav,NavLink } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

function Header( {handleLogout, me } ){
    const [name,setName]=useState("")
    useEffect(()=>{
        if (me.id>0){
        fetch(`/patients/${me.id}`)
        .then(resp=>resp.json())
        .then(data=>setName(data.name))
    }}
    ,[me])

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
            {/* Patient Portal */}
            {me.id? `Welcome ${name}!`:'Patient Portal'}
            </Navbar.Brand>
                <Nav className="me-auto" >
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/providers'>Providers</NavLink>
                {/* <NavLink href='/login'>Login</NavLink>
                <NavLink onClick={handleLogout}>Logout</NavLink> */}
                {me.id?<NavLink href='/appointments'>My Appointments</NavLink>:null}
                {me.id?<NavLink href='/prescriptions'>My Prescriptions</NavLink>:null}
                {/* {me.id?<NavLink >Welcome {name}!</NavLink>:null} */}
                {me.id?<NavLink onClick={handleLogout}>Logout</NavLink>:<NavLink href='/login'>Login</NavLink>}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;