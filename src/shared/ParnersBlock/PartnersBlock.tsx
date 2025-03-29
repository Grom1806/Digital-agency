
import styles from './PartnersBlock.module.scss'
import Card from '@shared/assets/Partners/Card.svg'
import Card1 from '@shared/assets/Partners/Card-1.svg'
import Card2 from '@shared/assets/Partners/Card-2.svg'
import Card3 from '@shared/assets/Partners/Card-3.svg'
import Card4 from '@shared/assets/Partners/Card-4.svg'
import Card5 from '@shared/assets//Partners/Card-5.svg'
const PartnersBlock: React.FC = () => {
  return <div>
		<div className={styles.partnersBlock}>
		<h3 className={styles.title}>Trusted By 250+ Companies</h3>
			<ul>
				<li><img src={Card} alt="partner 1" /></li>
				<li><img src={Card1} alt="partner 2" /></li>
				<li><img src={Card2} alt="partner 3" /></li>
				<li><img src={Card3} alt="partner 4" /></li>
				<li><img src={Card4} alt="partner 5" /></li>
				<li><img src={Card5} alt="partner 6" /></li>
			</ul>
		</div>
	</div>;
};

export default PartnersBlock;
