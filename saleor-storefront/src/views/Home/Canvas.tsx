import React from "react";
import "./scss/canvas.scss";

import Svg1 from "../../images/canvas-circles.svg";
import Svg2 from "../../images/canvas-helix.svg";
import Svg3 from "../../images/canvas-yellow-circle.svg";
import Svg4 from "../../images/canvas-crosses.svg";

const Canvas = () => {
  return (
    <>
      <Svg1 className="homepage-canvas__svg-1" />
      <Svg2 className="homepage-canvas__svg-2" />
      <Svg3 className="homepage-canvas__svg-3" />
      <Svg4 className="homepage-canvas__svg-4" />
    </>
  );
};

export default Canvas;
