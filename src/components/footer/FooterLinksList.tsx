import IDiscordLogo from '../icons/IDiscordLogo';
import IInstagramLogo from '../icons/IInstagramLogo';
import ITwitterLogo from '../icons/ITwitterLogo';
import IYoutubeLogo from '../icons/IYoutubeLogo';
import './FooterLinksList.scss'
const FooterLinksList = () => {
  return ( 
    <ul className="footer-links-list">
      <li><a href=""><IDiscordLogo/></a></li>
      <li><a href=""><IYoutubeLogo/></a></li>
      <li><a href=""><ITwitterLogo/></a></li>
      <li><a href=""><IInstagramLogo/></a></li>
    </ul>
  );
}
 
export default FooterLinksList;