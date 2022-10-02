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

let tot=3;
function App() {

  const [mapExpanded, setMapExpanded]=useState({
    meta_pm:false,
    ps: false,
    mac: false,
    peri: false,
    dp: false,
    other: false,
  });

  const [DPexpanded, setDPexpanded]=useState(false);
  const [macExpanded, setMacExpanded]=useState(false);

// let la=0;
  const [loggedIn, setLoggedIn] = useState(false);
  // const [la, setLa] = useState(1);
  let la=0;
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
    const queryString = window.location.search;
    console.log(queryString);
   
    const urlParams = new URLSearchParams(queryString);
    let la=urlParams.get('last');
    la++;
    if(la>tot){
      la=tot;
      window.alert("All images have already been annotated. Thank you for your time!");
    }
    setImgSelected(la);
    console.log(la);

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

    console.log("USE_EFFECT");
    console.log(loggedIn);
    console.log(imgSelected);
    

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
    
  }, [imgSelected, loggedIn]);

    return (
      
      <React.Fragment>
        {!loggedIn && < Auth loggedIn={loggedIn}/>}
        {loggedIn && <div>
        <Nav loggedIn={loggedIn} imgSelected={imgSelected} setImgSelected={setImgSelected} setSelected={setSelected}/>
        </div>}
{loggedIn && 
        <div className='flex'>
          <div className='flex flex-col' style={{width:"29%"}}>
            <META_PM selected={selected} setSelected={setSelected} mapExpanded={mapExpanded} setMapExpanded={setMapExpanded} />
            <PS selected={selected} setSelected={setSelected} mapExpanded={mapExpanded} setMapExpanded={setMapExpanded} />
            <Mac selected={selected} setSelected={setSelected} mapExpanded={mapExpanded} setMapExpanded={setMapExpanded} />
            <Peri selected={selected} setSelected={setSelected} mapExpanded={mapExpanded} setMapExpanded={setMapExpanded} />
            <DP selected={selected} setSelected={setSelected} mapExpanded={mapExpanded} setMapExpanded={setMapExpanded} />
            <Other selected={selected} setSelected={setSelected} mapExpanded={mapExpanded} setMapExpanded={setMapExpanded} />
          </div>

          <div className='flex flex-col' style={{width:"77%"}}>
            <MagImg la={la} user={user} loggedIn={loggedIn} selected={selected} setSelected={setSelected} imgSelected={imgSelected} setImgSelected={setImgSelected}/>

          </div>
         
        </div>}

       

      
    </React.Fragment>
    );
}
export default App;

