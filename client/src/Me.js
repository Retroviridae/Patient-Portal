import React, { useState, useEffect } from 'react';

function Me(){
    const [me,setMe]= useState({
        "id": "",
        "username": "",
        "password_digest": "",
        "patient_id": ""
    })
    useEffect(()=>{
        fetch('/me')
        .then(resp=> resp.json())
        .then(data => setMe(data))
      },[])

    return (
        <div>
        </div>
    )
}

export default Me;