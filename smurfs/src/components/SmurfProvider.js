import React, { useEffect, useState } from "react";
import axios from "axios";
import SmurfList from "./SmurfList";
import SmurfContext from "../contexts/SmurfContext";

function SmurfProvider() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then(res => setSmurfs(res.data));
  }, []);

  return (
    <SmurfContext.Provider value={smurfs}>
      <SmurfList />
    </SmurfContext.Provider>
  );
}

export default SmurfProvider;
