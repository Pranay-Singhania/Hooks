import { useState, useEffect } from "react";

const UseEffect = () => {
  const [wid, setWid] = useState(0);
  return <div className="UseEffect">The size of the window is {wid}</div>;
};
export default UseEffect;
