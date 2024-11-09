import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import bg1 from '../../assets/bg1.png';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>

                <img src={bg1} alt="Background" className={styles.homeBgImg} />
                <Header />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className={styles.textCenter}
                >
                    <p>Zenith Array</p>
                </motion.div>
            </div>

        
        </div>
    );
};

export default Home;
