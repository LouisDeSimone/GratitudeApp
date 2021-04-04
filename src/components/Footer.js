import React from "react";

function Footer() {

const currentYear = new Date().getFullYear();

    return(
        <footer>
        <p className="footer">Copyright ⓒ {currentYear} | Louis DeSimone</p>
        </footer>
        
    )
}

export default Footer;