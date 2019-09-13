import React, { useContext } from "react";
import SmurfContext from "../contexts/SmurfContext";

const SmurfList = props => {
  const { smurfs } = useContext(SmurfContext);
  return (
    <div>
      <div>
        {smurfs.map(item => (
          <li key={item.id}>
            Name: {item.name} Age: {item.age} Height: {item.height}
          </li>
        ))}
      </div>
    </div>
  );
};
export default SmurfList;
