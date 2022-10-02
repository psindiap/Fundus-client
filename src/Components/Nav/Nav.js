
import React from 'react';
import {useState} from 'react';


function DP({loggedIn, imgSelected, setImgSelected, setSelected}) {
    let tot=98;
return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand">Fundus Image Classification</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
{loggedIn && <div class="collapse navbar-collapse" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0 ch">
    <li class="nav-item">
      <div class="nav-link active" aria-current="page" href="#">Images : {imgSelected} / {tot}</div>
    </li>
    
  </ul>
  <form class="d-flex">
    {/* <button onClick={(e) => {
        e.preventDefault();
      if(imgSelected>1){
        setImgSelected(imgSelected-1);
        console.log(imgSelected);
        setSelected({
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
        }
      }}  class="btn btn-outline-success mx-2" type="submit">Prev</button> */}
    {/* <button onClick={(e) => {
      e.preventDefault();
      if(imgSelected<tot){
        setImgSelected(imgSelected+1);
        console.log(imgSelected);
        setSelected({
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
      }
      }} class="btn btn-outline-success mx-2" type="submit">Next</button> */}
      
  </form>
</div>}
</div>
</nav>
    );
}

export default DP;