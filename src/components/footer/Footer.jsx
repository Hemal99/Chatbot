import React from 'react';
import Logo from "../../assets/logo.png";
import{
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";
import css from './footer.module.css';

 const Footer = () => {
 
        return(
            <div className={css.cFooterWrapper}>
              {/* <Chatbot /> */}
                <hr/>

                <div className={css.cFooter}>

                    <div className={css.logo}>
                        <img src = {Logo} alt=""/>
                        <span>amazon</span>
                    </div>

                     <div className={css.block}>
                            <div className={css.detail}>
                                {/* <img src={Logo} alt=""/> */}
                                <span>Contact Us</span>
                                <span >
                                <LocationMarkerIcon className={css.icon}/>
                                <span className={css.pngLine}>111 north avenue Orlando, FL 32801</span>    
                                </span> 

                                <span className={css.pngLine}>
                                    {" "}
                                    <PhoneIcon className={css.icon}/>
                                    <a href="tel:234-567-3421">234-567-3421</a>
                                </span> 


                                <span className={css.pngLine}>
                                    <InboxIcon className={css.icon}/>
                                    <a href="mailto:support@amazon.com">support@amazon.com</a>
                                </span>                  
                            </div>
                        </div>

                        <div className={css.block}>
                            <div className={css.detail}>
                                <span>Account</span>
                                <span className={css.pngLine}>
                                    <LoginIcon className={css.icon}/>
                                    Sign in
                                </span>                   
                            </div>
                        </div>

                        <div className={css.block}>
                            <div className={css.detail}>
                                <span>Company</span>
                                <span className={css.pngLine}>
                                    <UsersIcon className={css.icon}/>
                                     <a href="/about">
                                        <p>About Us</p>
                                     </a>
                                </span>                   
                            </div>
                        </div>


                        <div className={css.block}>
                            <div className={css.detail}>
                                <span>Resources</span>
                                <span className={css.pngLine}>
                                    <LinkIcon className={css.icon}/>
                                    <p>Safety Privacy & Terms</p>
                                </span>                   
                            </div>
                        </div>
                </div>

                <div className={css.copyRight}>                   
                                <span>Copyright @2022 by Amazon, Inc,</span>
                                <span>All rights reserved.</span>            
                            
                 </div>
            </div>
        );
 };

 export default Footer;