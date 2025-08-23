import Heading from '../../components/UI/Heading';
import './TopCreatorItem.scss';

type TopCreatorItemProps = {
  index: number;
  avatarUrl: string;
  avatarName: string;
  totalSales: string;
}
const TopCreatorItem = ({
  index,
  avatarUrl,
  avatarName,
  totalSales
}: TopCreatorItemProps) => {
  return (  
    <div className="top-creator">
      <div className="top-creator__index">{index}</div>
      <div className="top-creator__img">
        <img src={avatarUrl} alt='avatar image' />
      </div>
      <Heading level={5} label={avatarName}/>
      <div className="top-creator__info">
        Total Sales: <span>{totalSales} ETH</span>
      </div>
    </div>
  );
}
 
export default TopCreatorItem;