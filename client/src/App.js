import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes,useNavigate,useParams } from "react-router"
import Header from './Header';
import Test from './Test';
import Home from './Home';
import Login from './Login';
import Me from './Me';
import MyPrescriptions from './MyPrescriptions';
import MyAppointments from './MyAppointments';
import Providers from './Providers';
import NewAppointment from './NewAppointment';
import Reschedule from './EditAppointment';
import EditAppointment from './EditAppointment';

function App() {
  
  let navigate= useNavigate();
  const [me,setMe]= useState({
    "id": "",
    "username": "",
    "password_digest": "",
    "patient_id": ""
  })
  const [errors,setErrors] = useState()
  useEffect(()=>{
    fetch('/me')
    .then(resp=> resp.json())
    .then(data => data?setMe(data):setMe({
      "id": "",
      "username": "",
      "password_digest": "",
      "patient_id": ""
    }))
  },[])

  function handleLogout(){
    navigate('/')
    fetch("/logout", {
      method: "DELETE",
    }).then(setMe({
        "id": "",
        "username": "",
        "password_digest": "",
        "patient_id": ""
      })
    )
  }

  function handleLogin(form){
    fetch("/login",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
  }).then(resp => {
    if (resp.ok){
      resp.json().then(data => 
        {setMe(data)
        setErrors()})
      navigate('/')
    }else{
      resp.json().then(errors => setErrors(errors.error))
    }
  })
  }
  return (
    <div>
      <Header handleLogout={handleLogout} me={me} />
      {errors}
      <Routes>
        <Route path="/providers" element={<Providers/>} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/" element={<Home />} />
        <Route path="/prescriptions" element={<MyPrescriptions me={me} />} />
        <Route path="/appointments" element={<MyAppointments me={me} />} />
        <Route path="/appointments/new" element={<NewAppointment />} />
        <Route path="/appointments/edit/:id" element={<EditAppointment />} />
      </Routes>
    </div>
  );
}
export default App;