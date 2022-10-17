import { useState } from "react";
import { DragArea } from "./DragArea";
import { Refresh } from "./Refresh";

import "./index.scss";

const Logo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="drag-container">
      <h4 className="drag-title">Drag Me!</h4>
      <DragArea key={count} />
      </div>
    </>
  );
};

export default Logo;
