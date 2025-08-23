import TrendingItem from '../../components/trending-section/TrendingItem';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import './TrendingSection.scss'
const TrendingSection = () => {
  return ( 
    <div className="container trending-section">
      <Heading level={3} label='Trending Collection'/>
      <Text 
        label='Checkout our weekly updated trending collection.'
        className='mt-10'
      />
      <div className="trending-section__gallery">
        <TrendingItem
          firstImageUrl="/trending/1.1.png"
          secondImageUrl="/trending/1.2.png"
          thirdImageUrl="/trending/1.3.png"
          avatarUrl="/avatars/avatar-2.png"
          userName="MrFox"
          title="DSGN Animals"
        />
        <TrendingItem
          firstImageUrl="/trending/2.1.png"
          secondImageUrl="/trending/2.2.png"
          thirdImageUrl="/trending/2.3.png"
          avatarUrl="/avatars/avatar-3.png"
          userName="Shroomie"
          title="Magic Mushrooms"
        />
        <TrendingItem
          firstImageUrl="/trending/3.1.png"
          secondImageUrl="/trending/3.2.png"
          thirdImageUrl="/trending/3.3.png"
          avatarUrl="/avatars/avatar-4.png"
          userName="BeKind2Robots"
          title="Disco Machines"
        />
      </div>
    </div>
   );
}
 
export default TrendingSection;