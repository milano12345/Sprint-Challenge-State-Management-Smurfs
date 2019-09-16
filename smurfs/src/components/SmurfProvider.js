import React, { useEffect, useState } from "react";
import axios from "axios";
import SmurfList from "./SmurfList";
import { SmurfContext, NewContext } from "../contexts/SmurfContext";
import SmurfForm from "../components/SmurfForm";
import NewSmurfList from "./NewSmurfList";

function SmurfProvider() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then(res => setSmurfs(res.data));
  }, [smurfs]);

  return (
    <SmurfContext.Provider value={{ smurfs }}>
      <NewContext.Provider>
        <SmurfList />
        <SmurfForm />
      </NewContext.Provider>
    </SmurfContext.Provider>
  );
}

export default SmurfProvider;
