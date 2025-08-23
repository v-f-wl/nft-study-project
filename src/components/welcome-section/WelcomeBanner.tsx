import Avatar from '../UI/Avatar';
import Heading from '../UI/Heading';
import './WelcomeBanner.scss'
const WelcomeBanner = () => {
  return ( 
    <div className="welcome-banner">
      <picture>
        <source srcSet="/welcome-section/banner.webp" type="image/webp"/>
        <img src="/welcome-section/banner.png" alt="Картинка в разных форматах"/>
      </picture>
      <div className="welcome-banner__title">
        <Heading level={5} label='Space Walking'/>
        <Avatar imageUrl='./avatars/avatar-1.png' userName='Animakid'/>
      </div>
    </div>
   );
}
 
export default WelcomeBanner;