import React from 'react';
import Image from 'next/image'
// import {Link} from 'react-router-dom';
import Logo from '../../../assets/img/Black-ace-logo.png.png';
import emailIcon from '../../../assets/img/email-icon.png';
import linkedInIcon from '../../../assets/img/linkedIn-icon.png';
import twitterIcon from '../../../assets/img/twitter-icon.png';
import instagramIcon from '../../../assets/img/instagram-icon.png';

// styling
import styles from './style.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_first}>
        <div className={styles.logo}>
          <Image src={Logo} alt='Launchpad Logo' className={styles.logo_img} /> 
        </div> 
        <p className={styles.footer_p}>© {new Date().getFullYear()} Black Ace</p>
      </div>

      <div>
          <h4>
            Join Our Platform{' '}
          </h4>
      </div>

      <div>
        <ul className={styles.socials_icons}>
          <li>
          <Image src={emailIcon} alt='email icon' />
          </li>
          <li>
          <Image src={linkedInIcon} alt='linkedin icon' />
          </li>
          <li>
          <Image src={twitterIcon} alt='twitter icon' />
          </li>
          <li>
          <Image src={instagramIcon} alt='instagram icon' />
          </li>
        </ul>
        
      </div>
      <div>
        <p className={styles.footer_p_2}>
          © {new Date().getFullYear()} Black Ace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
