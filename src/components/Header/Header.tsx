import { useState } from 'react';
import styles from './Header.module.css';
import logoImg from '../../assets/images/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface HeaderType {
    lightText?: boolean;
}

const Header = ({ lightText = true }: HeaderType) => {
    const textClass = lightText ? styles.lightText : styles.darkText;
    const [navOpen, setNavOpen] = useState(false);

    const handleNavOpenClose = () => {
        setNavOpen(!navOpen);
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
                    <NavLink to={'#'}>Home</NavLink>
                    <NavLink to={'#'}>About Us</NavLink>
                    <NavLink to={'#'}>Our Work</NavLink>
                    <NavLink to={'#'}>Contact Us</NavLink>
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
                        <NavLink to={'#'}>Home</NavLink>
                        <NavLink to={'#'}>About Us</NavLink>
                        <NavLink to={'#'}>Our Work</NavLink>
                        <NavLink to={'#'}>Contact Us</NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
