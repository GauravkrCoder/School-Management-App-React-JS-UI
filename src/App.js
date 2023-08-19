import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/core/Header/Header";
import Home from "./components/core/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import Leftnavbar from "././components/core/Leftnavbar/Leftnavbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./msalConfig";
import { PageLayout } from "./components/core/Msallogin/PageLayout";
import { ProfileData } from "./components/core/Msallogin/ProfileData";
import { callMsGraph } from "./graph";
import Button from "react-bootstrap/Button";


const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    }).then((response) => {
      callMsGraph(response.accessToken).then(response => setGraphData(response));
    });
  }

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      {graphData ?
        <ProfileData graphData={graphData} />
        :
        <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
      }
    </>
  );
};

const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5 className="card-title">Please sign-in to see your profile information.</h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">     
//       <Router>
//         <Header />
//         <div>
//           <Routes>
//             <Route exact path="/" element={<Login />}></Route>
//             <Route exact path="/login" element={<Login />}></Route>
//             <Route exact path="/sign-up" element={<SignUp />}></Route>
//             <Route exact path="/" element={<Leftnavbar />}>
//               <Route path="/home" element={<Home />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//             </Route>
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <PageLayout>
        <MainContent />
      </PageLayout>
    </div>
  );
}

export default App;
