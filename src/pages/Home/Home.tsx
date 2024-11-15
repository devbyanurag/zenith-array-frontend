import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import styles from './Home.module.css';
import bg1 from '../../assets/bg1.png';
import Header from '../../components/Header/Header';
import aboutImg from '../../assets/images/about-1.webp';
import { partnersData } from '../../assets/images/partners/partnerImagesData'



const Home = () => {
    // Get scroll position
    const { scrollYProgress } = useScroll();

    // Define smoother transformations with an extended scroll range
    const leftX = useTransform(scrollYProgress, [0.02, 0.4], ['-50%', '0%']);
    const leftOpacity = useTransform(scrollYProgress, [0.0, 0.3], [0, 1]);

    const rightX = useTransform(scrollYProgress, [0.02, 0.4], ['50%', '0%']);
    const rightOpacity = useTransform(scrollYProgress, [0.0, 0.3], [0, 1]);



    const partnerRef = useRef(null); // Reference to the element
    const isInViewpartnerRef = useInView(partnerRef, { once: true });

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container} >
                <img src={bg1} alt="Background" className={styles.homeBgImg} />
                <Header homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
                
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className={styles.textCenter}
                >
                    <p>Zenith Array</p>
                </motion.div>
            </div>

            <section className={styles.aboutSection}  ref={aboutRef}>
                <motion.div
                    className={`${styles.aboutSectionLeft}`}
                    style={{ x: leftX, opacity: leftOpacity }}

                >
                    <img src={aboutImg} alt="About Us" />
                </motion.div>
                <motion.div
                    className={`${styles.aboutSectionRight}`}
                    style={{ x: rightX, opacity: rightOpacity }}
                >
                    <h2>About Us</h2>
                    <p>Zenith Array is a leading Pan-India casting and production agency based in Mumbai, with operations across Himachal Pradesh, Uttarakhand, Chandigarh, Delhi, Jammu & Kashmir, and Northern UP. Specializing in line production, casting, and event management, Zenith Array is known for its commitment to delivering top-tier production services and seamless project execution for films and events. For more information
                        <a href='https://m.imdb.com/name/nm15856716/?ref_=nv_sr_srsg_0_tt_1_nm_7_q_manish%2520kaka' target='_blank'> Click Here</a> </p>
                </motion.div>
            </section>
            <section className={styles.partnersSection}>
                <h1 className={styles.partnersHeading}>Our Partners</h1>
                <motion.div
                    ref={partnerRef}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: isInViewpartnerRef ? 1 : 0, 
                        y: isInViewpartnerRef ? 0 : 100,
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className={styles.partnersContainer}>
                    <div className={styles.partnersItem}>
                        <img src={partnersData.yashRaj} alt="yashraj" />
                    </div>
                    <div className={styles.partnersItem}>
                        <img src={partnersData.dharma} alt="dharma" />
                    </div>
                    <div className={styles.partnersItem}>
                        <img src={partnersData.redChillies} alt="redchilles" />
                    </div>
                    <div className={styles.partnersItem}>
                        <img src={partnersData.jiostudios} alt="jioStudios" />
                    </div>
                    <div className={styles.partnersItem}>
                        <img src={partnersData.bansali} alt="bansali" />
                    </div>
                    <div className={styles.partnersItem}>
                        <img src={partnersData.maddock} alt="maddock" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;


// const PartnersItem = ({ image, altText }:PartnersItemProps) => {
//     const ref = useRef(null); // Reference to the element
//     const isInView = useInView(ref, { once: true });

//   return (
//     <motion.div
//       ref={ref} // Attach the ref to track visibility
//       className={styles.partnersItem}
//       initial={{ opacity: 0, y: 100 }} // Initial state of the animation
//       animate={{
//         opacity: isInView ? 1 : 0, // Animate opacity based on the element's visibility
//         y: isInView ? 0 : 100, // Animate vertical movement
//       }}
//       transition={{ duration: 1, ease: "easeInOut" }} // Transition settings
//     >
//       <img src={image} alt={altText} />
//     </motion.div>
//   );
// };