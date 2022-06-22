import React, { useState, useEffect } from 'react';
import MyPrescriptions from './MyPrescriptions';

function Home( { me }){

    return (
        <header>
            Home
            <p>pt.id: {me.id?"logged in":'not'} </p>
        </header>
    )
}

export default Home;