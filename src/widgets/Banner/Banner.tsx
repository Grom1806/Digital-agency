import TextContainer from '@shared/assets/Text Container.png';
import styles from './Banner.module.scss';
interface BannerProps {
  title: string;
  description: string;
}

const Banner = ({ title, description }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <img src={TextContainer} alt="" />
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
