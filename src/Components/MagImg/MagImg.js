import React from "react";
import "./MagImg.css";
import axios from 'axios';
import ReactImageZoom from 'react-image-zoom';


/*
 * A simple React component
 */

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../Optos', false, /\.(png|jpe?g|svg)$/));
const values = Object.values(images)
values.sort();
const tot=3;


function sendData(user, loggedIn, selected, setSelected, imgSelected ,setImgSelected) {

  selected.other.sort();
  selected.meta_pm.lesions.sort();

  const data = JSON.stringify(selected);

  console.log("DATA SENT: ", data);

  var config = {
    method: 'post',
    url: `https://fundus-image.herokuapp.com/db/update/${imgSelected}`,
    headers: { 
      'token': `Bearer ${user.jwt}`, 
      'Content-Type': 'application/json'
    },
    data : data
  };

  console.log("LOGGEDIn: " + loggedIn);
  console.log(JSON.stringify(selected));
  

  if(selected.ps==="NILL" || selected.mac==="NILL" || selected.peri==="NILL" || selected.dp==="NILL" || selected.meta_pm.category==="NILL"|| selected.other.length===0 || selected.meta_pm.lesions.length===0){
    
    window.alert("Please fill all the fields");
  }else if(selected.meta_pm.lesions.includes('None') && selected.meta_pm.lesions.length>1){
    alert("Please select 'None' only if there are no other findings for 'Lesions' under 'META-PM'.");
  }
  else if(selected.other.includes('None') && selected.other.length>1){
    alert("Please select 'None' only if there are no other findings for 'Other Retinal changes'.");
  }
  
  else if(loggedIn){
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      window.alert("Data sent successfully!");
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
      }  else if (imgSelected===tot){
        window.alert("All images have been annotated. Thank you!");
      }
    })
   
    .catch(function (error) {
      console.log(error);
    });

    
  }


}

function delData(user, loggedIn, selected, imgSelected) {

  user=null;
  loggedIn=false;
  selected=null;
  console.log("LOGGEDIn: " + loggedIn);
  console.log(JSON.stringify(selected));
  console.log("USER: " + user);
  window.alert("Logged out successfully!");

}

function MagImg({user, loggedIn, selected, setSelected, imgSelected, setImgSelected}) {

  function magnify(imgID, zoom) {

    if(document.querySelector('.img-magnifier-glass')){
      document.querySelector('.img-magnifier-glass').remove();
    }else{

      let img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      let pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
      // glass=document.deleteElementById("DIV");
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }

    }
  }


     return (

<div>
<div className="img-magnifier-container">
<img src={values[imgSelected-1]} id="F-1" alt="Fundus"/>
</div>
<div className="flex space-x-2 justify-center gap-16 pd">
<button onClick={() => magnify("F-1", 3.5)} type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Magnify</button>

<button 
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    onClick={(e) => {
      e.preventDefault();
     
      sendData(user, loggedIn, selected, setSelected, imgSelected, setImgSelected) 
    }}
    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>


</div>
<div  className="flex space-x-2 justify-center">
<a href="fundus-image.netlify.app/"><button 
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    onClick={() => delData(user, loggedIn, selected, imgSelected)}
    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign Out</button></a>
</div>




</div>


     );
  }
  
export default MagImg;