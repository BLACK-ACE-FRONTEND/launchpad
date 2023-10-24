import React, {useEffect, useState} from 'react';
import Image from 'next/image'

// styling
import styles from './style.module.css';

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
          {/* <Image src={Logo} alt='Launchpad Logo' className={styles.logo_img} /> */}
          <h2 className={styles.nav_log}>LaunchPad</h2>
        
        <nav>
          <ul className={styles.nav_links}>
            
          </ul>

          {/* Mobile Menu */}
          <div className={openMenu ? styles.burger_x : styles.burger} onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {openMenu && (
            <ul>
                
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
