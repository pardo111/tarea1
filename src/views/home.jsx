import Navbar from '../components/Navbar'
import React, { useState } from 'react';
import Venta from '../components/venta';
import Welcome from '../components/welcome';
import Footer from '../components/footer';
import json from '../data.json';

const Home = ()=>{
    const [arr, setArr ] = useState(["welcome","store","footer"]);
     return (


        <div className="flex flex-col justify-certer items-center w-screen  bg-[#272727]">   
            <Navbar arr={arr}/>
            <div className='mt-[100px]'>
            <Welcome/>
            <Venta data={json.dataStore}/>
            <Footer data={json.footer}/>
            </div>

         </div>
    );
}

export default Home;