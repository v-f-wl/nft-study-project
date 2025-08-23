import Avatar from '../UI/Avatar';
import Heading from '../UI/Heading';
import './DiscoverCard.scss';

type DiscoverCard = {
  cardImg:  string;
  avatarImg: string;
  cardTitle: string;
  avatarName: string;
  cardPrice: string;
  cardBid: string;
}
const DiscoverCard = ({
  cardImg,
  avatarImg,
  cardTitle,
  avatarName,
  cardPrice,
  cardBid,
}: DiscoverCard) => {
  return ( 
    <div className="discover-card">
      <div className="discover-card__img">
        <img src={cardImg} alt="discover card img" />
      </div>
      <div className="discover-card__info">
        <Heading level={5} label={cardTitle}/>
        <Avatar 
          imageUrl={avatarImg} 
          userName={avatarName}
          className='mt-5'
        />
        <div className="discover-card__details">
            <div className="discover-card__col">
              <div className="discover-card__label">Price</div>
              <div className="discover-card__cout">{cardPrice} ETH</div>
            </div>
            <div className="discover-card__col discover-card__col--last">
              <div className="discover-card__label">Highest Bid</div>
              <div className="discover-card__cout">{cardBid} wETH</div>
            </div>
        </div>
      </div>
    </div>
  );
}
 
export default DiscoverCard;