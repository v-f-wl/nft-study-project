import './TrendingItem.scss';
import Avatar from "../UI/Avatar";
import Heading from "../UI/Heading";

type TrendingItem = {
  firstImageUrl: string;
  secondImageUrl: string;
  thirdImageUrl: string;
  userName: string;
  title: string;
  avatarUrl: string;
}
const TrendingItem = ({
  firstImageUrl,
  secondImageUrl,
  thirdImageUrl,
  userName,
  avatarUrl,
  title
}: TrendingItem) => {
  return ( 
    <div className="trending-grid">
      <div className="trending-grid__main">
        <img src={firstImageUrl} alt={`${userName}s pics`} />
      </div>
      <div className="trending-grid__set">
        <div className="">
          <img src={secondImageUrl} alt={`${userName}s pics`} />
        </div>
        <div className="">
          <img src={thirdImageUrl} alt={`${userName}s pics`} />
        </div>
        <div className="trending-grid__count">1025+</div>
      </div>
      <Heading level={5} label={title}/>
      <Avatar imageUrl={avatarUrl} userName={userName}/>
    </div>
   );
}
 
export default TrendingItem;