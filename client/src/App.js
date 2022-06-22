import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router"
import Header from './Header';
import Test from './Test';
import Home from './Home';
import Login from './Login';
import Me from './Me';
import MyPrescriptions from './MyPrescriptions';

function App() {
  const [me,setMe]= useState({
    "id": "",
    "username": "",
    "password_digest": "",
    "patient_id": ""
  })
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
  }).then(resp => resp.json()).then(data => setMe(data))
  }

  return (
    <div>
      <Header handleLogout={handleLogout} me={me} />
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/" element={<Home />} />
        <Route path="/prescriptions" element={<MyPrescriptions me={me} />} />

      </Routes>
    </div>
  );
}
export default App;