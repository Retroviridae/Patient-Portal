import React, { useState, useEffect } from 'react';
import MyPrescriptions from './MyPrescriptions';
import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){

    return (
        <header>
             {/* <Row className='mt-2'>
        <Form.Label column lg={2}>
          Date
        </Form.Label>
        <Col xs={3}>
          <Form.Control type="time" placeholder="Date" name='date' onChange={(e)=>console.log(e.target.value)} />
        </Col>
      </Row>


      <Row className='mt-2'>
        <Form.Label column lg={2}>
          Category
        </Form.Label>
        <Col xs={7}>
          <Form.Select name='category'  aria-label="Default select example" >
            <option >Category</option>
            <option value="Cardio">Cardio</option>
            <option value="Weights">Weights</option>
            <option value="Sports">Sports</option>
            <option value="Body Weight">Body Weight</option>
          </Form.Select>
        </Col>
      </Row> */}
        </header>
    )
}

export default Home;
