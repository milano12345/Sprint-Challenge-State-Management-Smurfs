import React, { useContext } from "react";
import SmurfContext from "../contexts/SmurfContext";

const SmurfList = () => {
  const { smurfs } = useContext(SmurfContext);

  return smurfs.map(item => (
    <li key={item.id}>
      Name: {item.name} Age: {item.age} height: {item.height}
    </li>
  ));
};
export default SmurfList;
