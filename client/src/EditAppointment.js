import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from "react-router"
import { Form, Button, Row, Col,} from 'react-bootstrap/';


function EditAppointment(){
    
    const [form,setForm]=useState({
        "purpose":""
    })

    let { id } = useParams();

    let navigate = useNavigate()

    function handleFormChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        // console.log(form)
        // console.log(id)
        fetch(`/appointments/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          })
            .then((r) => r.json())
            .then(data => {
                setForm("")
                navigate('/appointments')
                console.log(data)});
        } 

    return (
            <form onSubmit={handleSubmit}>
            <Row className='mt-2'>
                <Form.Label column lg={2}>
                Edit appointment
                </Form.Label>
                <Col xs={7}>
                <Form.Control type="text" placeholder="Reason for visit?" name='purpose' value={form.purpose} onChange={handleFormChange}/>
                </Col>
            </Row>
            <Button variant="primary" type="submit">Submit changes</Button>
            </form>

    )
}

export default EditAppointment;