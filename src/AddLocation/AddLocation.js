import React from "react";
//import FindUser from "../FindUser/FindUser";
import "./AddLocation.css";

function AddLocation() {

  const FindUser = () => {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  
  
  document.querySelector('#find-me').addEventListener('click', FindUser);
}

  return (
    <div className="AddLocation">
      <h2>Add Location</h2>
      <button id="find-me" onClick={() => {FindUser()}}>Show my location</button>
      <br />
      <p id="status"></p>
      <a id="map-link" target="_blank"></a>
    </div>
  );
}

export default AddLocation;
