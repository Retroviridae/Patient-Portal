import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React,{ useState, useEffect } from 'react';
import { Route, Routes,useNavigate,useParams } from "react-router"


function NewAppointment(){

    let navigate= useNavigate();

    let { id } = useParams();

    const [form,setForm]=useState({
        "time": "",
        "purpose": "",
        "provider_id": "",
      })

    function handleFormChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/appointments",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
      }).then(resp => resp.json())
      .then(data => navigate("/appointment"))
        } 

    return (
        <form onSubmit={handleSubmit} style={{ width: '40rem',margin: 'auto' }}>
          <h2>Create a new Appointment!</h2>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Time
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="2022,1,1,09,30" name='time' value={form.time} onChange={handleFormChange}/>
            </Col>
          </Row>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Purpose
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="" name='purpose' value={form.purpose} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>

          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Provider_id
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="text" placeholder="1" name='provider_id' value={form.provider_id} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>

          <Button onSubmit={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </form>
      )
}

export default NewAppointment