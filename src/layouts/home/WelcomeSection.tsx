import Button from '../../components/UI/Button';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import StatsSection from '../../components/welcome-section/StatsSection';
import WelcomeBanner from '../../components/welcome-section/WelcomeBanner';
import './WelcomeSection.scss'
const WelcomeSection = () => {
  return ( 
    <div className="welcome-section container">
      <div className="">
        <Heading 
          level={1} 
          label='Discover digital art & Collect NFTs'
          className='max-w-510'
        />
        <Text 
          className='welcome-text'
          label='NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.'
        /> 
        <div className="mobile-banner">
          <WelcomeBanner/>
        </div>
        <Button 
          label='Get Started'
          onClick={() => {}}
          className='my-30'
        />
        <StatsSection/>
      </div>
      <div className="desktop-banner">
        <WelcomeBanner/>
      </div>
    </div>
  );
}
 
export default WelcomeSection;