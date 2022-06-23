import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap/';

function Providers(){
    const [providers,setProviders] = useState([])
    useEffect(()=>{
        fetch('/providers')
        .then(resp=> resp.json())
        .then(data => setProviders(data))
      },[])

    return (
        <header>
            {providers.map(provider=>{
                return(
                    <Card key={provider.id} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{provider.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{provider.specialty}</Card.Subtitle>
                        <Card.Text>
                            Address: {provider.office_location}
                        </Card.Text>
                        {/* <Button variant="primary">I don't take this anymore.</Button> */}
                    </Card.Body>
                    </Card>) 
            })}
        </header>
    )
}

export default Providers;