import DiscoverCard from '../../components/discover-more/DiscoverCard';
import IRocket from '../../components/icons/IRocket';
import Button from '../../components/UI/Button';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import './DiscoverMoreSection.scss';

const DiscoverMoreSection = () => {
  return ( 
    <div className="container discover-more">
      <div className="discover-more__header">
        <div>
          <Heading level={3} label="Discover More NFTs"/>
          <Text className="mt-10" label="Explore new trending NFTs"/>
        </div>

        <Button className='button-primary' onClick={() => {}} icon={<IRocket/>} label="See All" />
      </div>

      <div className="discover-more__list">
        {Array.from('111').map((_, index) => (
          <DiscoverCard
            key={`discoverCard__${index}`}
            cardImg={`/discover-more/banner-${++index}.png`}
            avatarImg={`/discover-more/avatar-${index}.png`}
            cardTitle="Distant Galaxy"
            avatarName='MoonDancer'
            cardPrice="1.63"
            cardBid="0.33"
          />
        ))}
      </div>
    </div>
   );
}
 
export default DiscoverMoreSection;