import Leftnavbar from "../Leftnavbar/Leftnavbar";
import "./Home.css";
import { Button } from 'primereact/button';
import React, { useState } from 'react';
import { Chips } from 'primereact/chips';

function Home() {
  const [values1, setValues1] = useState([]);

  return (
    <div>
      <div className="row">       
      </div>
      <div className="contentArea">
        <h1>Home Component works.!</h1>        
      </div>
    </div>
  );
}

export default Home;
