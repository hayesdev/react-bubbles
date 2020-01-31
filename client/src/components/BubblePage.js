import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const { id } = useParams();
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:4000/api/colors")
      .then(res => {
        console.log(res.data);
        setColorList(res.data);
      })
      .catch(err => console.log(err));

    const colorToUpdate = colorList.find(color => `${color.id}` === id);

    if (colorToUpdate) {
      setColorList(colorToUpdate);
    }
  }, [colorList, id]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
