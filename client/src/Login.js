import { Form, Button} from 'react-bootstrap/';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React,{ useState, useEffect } from 'react';
import { Route, Routes,useNavigate,useParams } from "react-router"


function Login( {handleLogin} ){
    let navigate= useNavigate();
    const [form,setForm]=useState({
        "username": "KateSkate",
        "password": "1234"
      })
    function handleFormChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        handleLogin(form)
          setForm({
            "username": "",
            "password": ""
          })} 
    return (
        <form onSubmit={handleSubmit} style={{ width: '40rem',margin: 'auto' }}>
          <h2>Log In to Your Account</h2>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Username
            </Form.Label>
            <Col xs={7}>
              <Form.Control type="username" placeholder="username" name='username' value={form.username} onChange={handleFormChange}/>
            </Col>
          </Row>
          
          <Row className='mt-2'>
            <Form.Label column lg={2}>
              Password
            </Form.Label>
            <Col xs={7}>
                {/* change type to password to hide password field */}
              <Form.Control type="password" placeholder="Password here" name='password' value={form.password} onChange={(e)=>handleFormChange(e)} />
            </Col>
          </Row>

          <Button onSubmit={handleSubmit} variant="primary" type="submit">
            Login
          </Button>
          <h1>Test Users:</h1>
          <p>username: "KateSkate", password: "1234"</p>
          <p>username: "JoshMadMan", password: "1234"</p>
          <p>username: "Updog", password: "1234"</p>
        </form>
      )
}

export default Login