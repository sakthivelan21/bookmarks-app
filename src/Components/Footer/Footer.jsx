import React from 'react';
import "./Footer.css"
function Footer() {
    return (
        <div className="footer" id="Support">
            <div className="footer-heading-flex">
                <h3 className="footer-heading">BookMarks</h3>
                <div className="footer-website-links">
                    <a href="https://www.instagram.com/sakthivel__21/" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-instagram-square footer-website-icons"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sakthi-velan-9569451a4/" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-linkedin footer-website-icons"></i>
                    </a>
                    <a href="https://github.com/sakthivelan21" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-github footer-website-icons"></i>
                    </a>
                    <a href="https://twitter.com/sakthivelan21" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-twitter-square footer-website-icons"></i>
                    </a>
                </div>
            </div>
            <h3 className="footer-text footer-product-heading">
                <i className="fa-solid fa-toolbox footer-icon"></i>
                Our Services
            </h3>
            <div className="footer-product-flex">
                <p className='footer-sub-text'>
                    Our Calculator application provides an easy interface and faster actions towards what you want to compute.
                It is very useful and handy. You can also see back your history of last actions. We strip to make your work symbol.
                If you find any bug in the application, Kindly drop a mail to <a href="mailto:incrediblesakthi21@gmail.com">incrediblesakthi21@gmail.com</a>
                </p>
            </div>

            <div className="footer-copy-right-holder">
                <h3 className="footer-copy-right">@2022 Calculator. All rights reserved.</h3>
            </div>
        </div>
    )
}

export default React.memo(Footer);