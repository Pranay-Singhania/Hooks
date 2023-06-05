import { useState, useEffect } from "react";

const UseEffect = () => {
  const [wid, setWid] = useState(window.screen.width);
  const newscrwid = () => {
    setWid(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", newscrwid);
    return () => {
      window.removeEventListener("resize", newscrwid);
    };
  });
  return (
    <div className="UseEffect">
      The size of the window is <span> {wid} </span>
    </div>
  );
};
export default UseEffect;
