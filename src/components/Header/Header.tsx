import { useState } from 'react';
import styles from './Header.module.css';
import logoImg from '../../assets/images/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderType {
    lightText?: boolean;
    homeRef?: React.RefObject<HTMLElement>;
    aboutRef?: React.RefObject<HTMLElement>;
    workRef?: React.RefObject<HTMLElement>;
    contactRef?: React.RefObject<HTMLElement>;
}

const Header = ({ lightText = true, homeRef, aboutRef, workRef, contactRef }: HeaderType) => {
    const textClass = lightText ? styles.lightText : styles.darkText;
    const [navOpen, setNavOpen] = useState(false);

    const handleNavOpenClose = () => {
        setNavOpen(!navOpen);
    };

    const handleScrollToSection = (ref?: React.RefObject<HTMLElement>) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={styles.headerbToTAni}
            >
                <img src={logoImg} alt="logo" className={styles.logo} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={`${styles.headerbToTAni} ${textClass}`}
            >
                <div className={`${styles.rightHeader} ${textClass}`}>
                    <button onClick={() => handleScrollToSection(homeRef)}>Home</button>
                    <button onClick={() => handleScrollToSection(aboutRef)}>About Us</button>
                    <button onClick={() => handleScrollToSection(workRef)}>Our Work</button>
                    <button onClick={() => handleScrollToSection(contactRef)}>Contact Us</button>
                </div>

                <div className={`${styles.rightHeaderSmall} ${textClass}`} onClick={handleNavOpenClose}>
                    {!navOpen ? <span>☰</span> : <span>✕</span>}
                </div>
            </motion.div>
            <AnimatePresence>
                {navOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, y: -50 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -50 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className={styles.SideNav}
                        style={{ backgroundColor: "#00000090" }}
                    >
                        <button onClick={() => handleScrollToSection(homeRef)}>Home</button>
                        <button onClick={() => handleScrollToSection(aboutRef)}>About Us</button>
                        <button onClick={() => handleScrollToSection(workRef)}>Our Work</button>
                        <button onClick={() => handleScrollToSection(contactRef)}>Contact Us</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
