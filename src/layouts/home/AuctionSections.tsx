import Avatar from '../../components/UI/Avatar';
import Button from '../../components/UI/Button';
import Heading from '../../components/UI/Heading';
import './AuctionSections.scss'
const AuctionSections = () => {
  return ( 
    <div className="auction">
      <div className="container auction-body">
        <div className="auction-body__title">
          <Avatar 
            imageUrl='/avatars/avatar-1.png' 
            userName='Shroomie'
            className='bg-grey'
          />
          <Heading
            level={2}
            label='Magic Mashrooms'
          />
          <Button
            onClick={() => {}}
            label='See NFT'
            className='white-btn'
          />
        </div>
        <div className="auction-body__timer">
          <div className="auction-title">
            Auction ends in:
          </div>
          <div className="auction-timer">
            <div className="auction-timer__body">
              <span className="auction-timer__time">23</span>
              <span className="auction-timer__label">Hours</span>
            </div>

            <span className="auction-timer__sep">:</span>

            <div className="auction-timer__body">
              <span className="auction-timer__time">59</span>
              <span className="auction-timer__label">Minutes</span>
            </div>

            <span className="auction-timer__sep">:</span>
            <div className="auction-timer__body">
              <span className="auction-timer__time">59</span>
              <span className="auction-timer__label">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default AuctionSections;