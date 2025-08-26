import './TopCreatersSection.scss';
import Button from "../../components/UI/Button";
import Heading from "../../components/UI/Heading";
import Text from "../../components/UI/Text";
import IRocket from '../../components/icons/IRocket';
import TopCreatorItem from './TopCreatorItem';


const topCreatersList = [
  {
    avatarName: 'Keepitreal',
    totalSales: '34.53'
  },
  {
    avatarName: 'DigiLab',
    totalSales: '34.53'
  },
  {
    avatarName: 'GravityOne',
    totalSales: '34.53'
  },
  {
    avatarName: 'Juanie',
    totalSales: '34.53'
  },
  {
    avatarName: 'BlueWhale',
    totalSales: '34.53'
  },
  {
    avatarName: 'mr fox',
    totalSales: '34.53'
  },
  {
    avatarName: 'Shroomie',
    totalSales: '34.53'
  },
  {
    avatarName: 'robotica',
    totalSales: '34.53'
  },
  {
    avatarName: 'RustyRobot',
    totalSales: '34.53'
  },
  {
    avatarName: 'animakid',
    totalSales: '34.53'
  },
  {
    avatarName: 'Dotgu',
    totalSales: '34.53'
  },
  {
    avatarName: 'Ghiblier',
    totalSales: '34.53'
  },
]
const TopCreatersSection = () => {
  return ( 
    <div className="container top-creaters">
      <div className="top-creaters__header">
        <div>
          <Heading level={3} label="Top creators"/>
          <Text className="mt-10" label="Checkout Top Rated Creators on the NFT Marketplace"/>
        </div>

        <div className="desktop-button">
          <Button className='button-primary' onClick={() => {}} icon={<IRocket/>} label="View Rankings" />
        </div>
      </div>

      <div className="top-creaters__list">
        {topCreatersList.map((item, index) => (
          <TopCreatorItem
            key={`${item.avatarName}__${index}`}
            index={++index}
            avatarUrl={`/creaters/avatar-${index}.jpg`}
            avatarName={item.avatarName}
            totalSales='34.3'
          />
        ))}
      </div>
      <div className="mobile-button">
          <Button className='button-primary full' onClick={() => {}} icon={<IRocket/>} label="View Rankings" />
        </div>
    </div>
  );
}
 
export default TopCreatersSection;