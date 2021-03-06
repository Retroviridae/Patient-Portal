import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap/';

function MyPrescriptions( { me } ){
    const [scripts,setScripts] = useState([])
    useEffect(()=>{
        if (me.id>0){
        fetch(`/patients/${me.id}`)
        .then(resp=>resp.json())
        .then(data=>setScripts(data.prescriptions))
    }}
    ,[me])

    function handleDelete(e){
        fetch(`/prescriptions/${e.target.name}`, {
          method: "DELETE",
        }).then(setScripts(scripts.filter(script=>script.id !==parseInt(e.target.name))))
      }

    return (
        <header>
            <h1>Prescriptions:</h1>
            {scripts.map(script=>{
               return(
                <Card key={script.id} style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{script.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{script.dose}</Card.Subtitle>
                    <Card.Text>
                        {script.schedule}
                    </Card.Text>
                    <Card.Text>
                        {script.provider}
                    </Card.Text>
                    <Button name={script.id} onClick={handleDelete} variant="primary">I don't take this anymore.</Button>
                </Card.Body>
                </Card>) 

            })}
        </header>
    )
}

export default MyPrescriptions;