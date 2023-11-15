import React from "react";
import mymodule from "./mycss.module.css";
import "./external.css";
import { Outlet } from "react-router-dom";

const MyCssComp = () => {
  let myBox = {
    color: false ? "Red" : "Green",
    backgroundColor: true ? "yellow" : "Pink",
    height: "200px",
    width: "200px",
    borderRadius: "50%",
  };
  return (
    <div>
      {/* use of inline css  */}
      <h2 style={{ color: "blue", backgroundColor: "aqua" }}>
        This is My Css Component
      </h2>

      {/* use of internal css  */}
      <p style={myBox}>Welcome You In Tamilnadu</p>
      {/* use of external css  */}
      <p className="txtDanger">I live In Pune</p>
      <p className="txtSuccess">I live In Tamilnadu</p>
      {/* use of module css  */}
      <h2 className={mymodule.shadow}>CHANGEPOND</h2>
      <h2 className={mymodule.special}>Panchashil Wankhede</h2>
     
     <Outlet />
    </div>
  );
};

export default MyCssComp;
