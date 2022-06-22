import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap/';

function MyAppointments( { me } ){
    const [appointments,setAppointments] = useState([])
    useEffect(()=>{
        if (me.id>0){
        fetch(`/patients/${me.id}`)
        .then(resp=>resp.json())
        .then(data=>setAppointments(data.appointments))
    }}
    ,[me])
    return (
        <header>
            <h1>Appointments:</h1>
            {appointments.map(appointment=>{
               return(
                <Card key={appointment.id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Being seen for: {appointment.purpose}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{appointment.time}</Card.Subtitle>
                    <Card.Text>
                        Seeing: {appointment.provider.name}
                    </Card.Text>
                    <Card.Text>
                        Office Location: {appointment.provider.office_location}
                    </Card.Text>
                    <Button variant="primary">Cancel appointment</Button>
                </Card.Body>
                </Card>) 

            })}
        </header>
    )
}

export default MyAppointments;