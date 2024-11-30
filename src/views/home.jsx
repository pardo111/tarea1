import Navbar from '../components/Navbar'
import React, { useState } from 'react';

const Home = ()=>{
    const [arr, setArr ] = useState(["welcome","counter","footer"]);

    return (


        <div className="flex flex-col justify-certer items-center">   
            <Navbar arr={arr}/>
         </div>
    );
}

export default Home;