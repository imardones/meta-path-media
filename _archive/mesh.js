import React from "react";
import { render } from "react-dom";
import randomColor from "randomcolor";
import Mandala from './Mandala';

import Icon from "./icon";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between",
  backgroundImage: "url(bnet2)"
};

const Mesh = () => (
  <div style={styles}>

  </div>
);

render(<Mesh />, document.getElementById("meshy"));
