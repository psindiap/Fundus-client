import './App.css';
import React, { useEffect } from 'react';
import PS from './Components/PS/PS';
import META_PM from './Components/META-PM/META-PM';
import Mac from './Components/Mac/Mac';
import DP from './Components/DP/DP';
import Other from './Components/Other/Other';
import Peri from './Components/Peri/Peri';
import Auth from './Components/Auth/Auth';
import MagImg from './Components/MagImg/MagImg';
import img from './Optos/1611516_OD_1.jpg';
import { useState } from 'react';
import Nav from './Components/Nav/Nav';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [firstLoaded,setFirstLoaded]=useState(false);

  const [selected, setSelected] = useState({
    meta_pm:{
      category:"NILL",
      lesions: []
    },
    ps: "NILL",
    mac: "NILL",
    peri: "NILL",
    dp: "NILL",
    other: [],
  });

  const [imgSelected, setImgSelected] = useState(1);

  useEffect(() => {
    if(firstLoaded){
      
      fetch(`https://fundus-image.herokuapp.com/db/getImage/${imgSelected}`, {
        method: 'GET',
        headers: {
          'token': `Bearer ${user.jwt}`,
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSelected(data);
      }
      );
    }
  },[firstLoaded])
  useEffect(() => {
    const queryString = window.location.search;
    console.log(queryString);
   
    const urlParams = new URLSearchParams(queryString);
    const jwt = urlParams.get('jwt');
    const id = urlParams.get('id');

    if(jwt && id){
      setFirstLoaded(true);
      setLoggedIn(true);
      setUser({id, jwt});
    }

    console.log("USEFFECT");
    console.log(loggedIn);

    if(loggedIn){
      fetch(`https://fundus-image.herokuapp.com/db/getImage/${imgSelected}`, {
        method: 'GET',
        headers: {
          'token': `Bearer ${user.jwt}`,
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSelected(data);
      }
      );
    }
    
  }, [imgSelected])

    return (
      
      <React.Fragment>
        {!loggedIn && < Auth loggedIn={loggedIn}/>}
        {loggedIn && <div>
        <Nav loggedIn={loggedIn} imgSelected={imgSelected} setImgSelected={setImgSelected} setSelected={setSelected}/>
        </div>}
{loggedIn && 
        <div className='flex'>
          <div className='flex flex-col w-2/5'>
            <META_PM selected={selected} setSelected={setSelected}/>
            <PS selected={selected} setSelected={setSelected}/>
            <Mac selected={selected} setSelected={setSelected}/>
            <Peri selected={selected} setSelected={setSelected}/>
            <DP selected={selected} setSelected={setSelected}/>
            <Other selected={selected} setSelected={setSelected}/>
          </div>

          <div className='flex flex-col w-3/5'>
            <MagImg user={user} loggedIn={loggedIn} selected={selected} imgSelected={imgSelected}/>

          </div>
         
        </div>}

       

      
    </React.Fragment>
    );
}
export default App;

