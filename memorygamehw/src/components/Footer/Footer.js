import React from "react";
import "./Footer.css";

const Footer = props => 
<footer className="footer fixed-bottom text-center mt-2 pt-2">
  <h6 className="text-white"><span>
      <h6 className="mb-0 pb-0 footerText">BUILT WITH<a href="http://www.heroku.com">{props.children}</a> || 
      <a className="footerText" href= "https://github.com/jamiereaves/newScraper">  VISIT THE GITHUB REPOSITORY</a></h6>
  </span></h6>
</footer>
export default Footer;