import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark");

  return (
    <div className="App">
      <p>{mode}</p>
      <FullName appMode={mode} />
      <Address />
      <ProfilePhoto />
    </div>
  );
}

export default App;
