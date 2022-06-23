import { Card, Button, Row, Form, Col } from 'react-bootstrap/';
import { Route, Routes,useNavigate,useParams } from "react-router"
import React,{ useState, useEffect } from 'react';

function MyAppointments( { me } ){
    const [appointments,setAppointments] = useState([])
    const [form, setForm] = useState()

    let navigate= useNavigate();

    useEffect(()=>{
        if (me.id>0){
        fetch(`/patients/${me.id}`)
        .then(resp=>resp.json())
        .then(data=>setAppointments(data.appointments))
    }}
    ,[me])
    function handleFormChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    function handleDelete(e){
        fetch(`/appointments/${e.target.name}`, {
          method: "DELETE",
        }).then(setAppointments(appointments.filter(appointment=>appointment.id !==parseInt(e.target.name))))
      }

      function handleEdit(e){
        navigate(`/appointments/edit/${e.target.name}`)
      }
    return (
        <header>
            <Button href='/appointments/new' variant="primary">New Appointment</Button>
            <h1>Appointments:</h1>
            {appointments.map(appointment=>{
               return(
                <Card key={appointment.id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Being seen for: {appointment.purpose}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Date: {appointment.time.slice(0,10)}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Time: {appointment.time.slice(11,19)}</Card.Subtitle>
                    <Card.Text>
                        Seeing: {appointment.provider.name}
                    </Card.Text>
                    <Card.Text>
                        Office Location: {appointment.provider.office_location}
                    </Card.Text>
                    <Button name={appointment.id} onClick={handleEdit} variant="secondary">Edit Appointment</Button>
                    <Button name={appointment.id} onClick={handleDelete} variant="dark">Cancel appointment</Button>
                </Card.Body>
                </Card>
                ) 
                

            })}
            
        </header>
    )
}

export default MyAppointments;