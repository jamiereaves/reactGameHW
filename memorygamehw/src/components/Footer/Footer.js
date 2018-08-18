import React from "react";
import "./Footer.css";

const Footer = props => 
<footer className="footer fixed-bottom text-center mt-2 pt-2">
  <h6 className="text-white"><span>
      <h6 className="mb-0 pb-0 footerText">BUILT WITH<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">{props.children}</a> || 
      <a className="footerText rightSide" href= "https://github.com/jamiereaves/reactGameHW" target="_blank" rel="noopener noreferrer">  GITHUB REPOSITORY</a></h6>
  </span></h6>
</footer>
export default Footer;