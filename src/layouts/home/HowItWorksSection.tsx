import './HowItWorksSection.scss'
import Heading from "../../components/UI/Heading";
import Text from "../../components/UI/Text";

type InfoCardType = {
  cardImg: string;
  cardTitle: string;
  cardText: string;
}
const InfoCard = ({
  cardImg,
  cardText,
  cardTitle
}: InfoCardType) => {
  return (
    <div className="info-card">
      <div className="info-card__img">
        <img src={cardImg} alt="info image" />
      </div>
      <Heading className='text-center mt-20' label={cardTitle} level={5}/>
      <div className="info-card__text">{cardText}</div>
    </div>
  )
}
const HowItWorksSection = () => {
  return ( 
    <div className="container info-body">
      <Heading
        level={3}
        label="How it works"
      />
      <Text label="Find out how to get started" className="mt-10"/>
      <div className="info-list">
        <InfoCard
          cardImg='/info-section/card-1.svg'
          cardText='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
          cardTitle='Setup Your wallet'
        />
        <InfoCard
          cardImg='/info-section/card-2.svg'
          cardText='Upload your work and setup your collection. Add a description, social links and floor price.'
          cardTitle='Create Collection'
        />
        <InfoCard
          cardImg='/info-section/card-3.svg'
          cardText='Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
          cardTitle='Start Earning'
        />
      </div>
    </div>
  );
}
 
export default HowItWorksSection;