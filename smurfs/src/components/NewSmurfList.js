import React from "react";

const NewSmurfList = props => {
  return props.data.map(item => (
    <li key={item.id}>
      Name: {item.name} Age: {item.age} Height: {item.height}
    </li>
  ));
};
export default NewSmurfList;
