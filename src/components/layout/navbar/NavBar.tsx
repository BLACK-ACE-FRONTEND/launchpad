import React, {useEffect, useState} from 'react';
import Image from 'next/image'

// styling
import styles from './style.module.css';

import Logo from '../../../assets/img/Black-ace-logo.png.png';
import {BiChevronDown, BiChevronUp} from 'react-icons/bi';
import {FaChevronRight, FaArrowRight} from 'react-icons/fa';


interface NavProps {
  mentorModal?: React.MouseEventHandler;
}
const NavBar: React.FC<NavProps> = ({mentorModal}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [navbar, setNavbar] = useState<string>('');
 
  const handleMenu = () => {
    setOpenMenu((p) => !p);
  };

  // Change Navbar on Scroll
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar('#182865');
    } else {
      setNavbar('');
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener('scroll', changeBackground);
  });
  return (
    <>
      <header className={styles.nav} style={{background: navbar}}>
          <Image src={Logo} alt='Launchpad Logo' className={styles.logo_img} />
       
        <nav>
          <ul className={styles.nav_links}>
            <li>
                STARTUPS
            </li>

            <li>
                INVESTORS
            </li>

            <li>
                CORPORATES
            </li>

            <li >
                HUBS
            </li>

            <li>
                LOG IN
            </li>

            <li>
                SIGN UP
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className={openMenu ? styles.burger_x : styles.burger} onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {openMenu && (
            <ul className={styles.menuItems}>
              <div className={styles.list}>
                <li>
                    STARTUPS
                </li>
                <li>
                    INVESTORS
                </li>
                
                <li>
                    CORPORATES
                </li>
                <li>
                    HUBS
                </li>
              </div>
              <li className={styles.join_now}>
                  LOG IN
                  <FaArrowRight size={14} />
              </li>

              <li className={styles.join_now}>
                  SIGN UP
                  <FaArrowRight size={14} />
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
