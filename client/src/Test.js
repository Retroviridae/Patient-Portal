import React, { useState, useEffect } from 'react';

function Test(){
    const [patients, setPatients]=useState([])
    const [providers, setProviders]=useState([])
    const [prescriptions, setPrescriptions]=useState([])
    const [appointments, setAppointments]=useState([])
    useEffect(()=>{
      fetch('/patients')
      .then(resp=> resp.json())
      .then(data => setPatients(data))
    },[])
  
    useEffect(()=>{
      fetch('/providers')
      .then(resp=> resp.json())
      .then(data => setProviders(data))
    },[])
    useEffect(()=>{
      fetch('/appointments')
      .then(resp=> resp.json())
      .then(data => setAppointments(data))
    },[])
  
    useEffect(()=>{
      fetch('/prescriptions')
      .then(resp=> resp.json())
      .then(data => setPrescriptions(data))
    },[])
  
    return (
        <div>
          <h1>Patients</h1>
            {patients.map(patient=>{
                return (
                  <p>Patient: {patient.name}</p>
                )
              })}
          <h1>Providerss</h1>
            {providers.map(provider=>{
                return (
                  <p>Provider: {provider.name}</p>
                )
              })}
            <h1>Appointments</h1>
            {appointments.map(appointment=>{
                return (
                  <p>appointment: {appointment.purpose}</p>
                )
              })}
          <h1>Prescriptions</h1>

            {prescriptions.map(prescription=>{
                return (
                  <p>prescription: {prescription.name}</p>
                )
              })}
        </div>
    )
}

export default Test;