import Button from '@features/UI/Buttons/Button/Button';
import styles from './HeroSection.module.scss';
const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
			<div className={styles.sectionWrapper}>
      <h1 className={styles.title}>A Digital Product Studio <br/>that will Work</h1>
      <p className={styles.subtitle}>For <span>Startups</span>, <span>Enterprise leaders</span>, <span>Media & Publishers</span> and <span>Social Good</span></p>
      <div className={styles.buttons}>
        <Button title="Our Work" buttonStyle="blackBarry" />
        <Button title="Contact Us" />
      </div>
			</div>
    </section>
  );
};

export default HeroSection;
