import ILogo from '../icons/ILogo';
import FooterLinksList from './FooterLinksList';
import './FooterTop.scss'
const FooterTop = () => {
  return ( 
    <div className="footer-top">
      <ul className="footer-top__nav">
        <li>
          <a href="#"><ILogo/></a>
        </li>
        <li className='footer-top-space'>
          NFT marketplace UI created with Anima for Figma.
        </li>
        <li>
          Join our community
        </li>
        <li>
          <FooterLinksList/>
        </li>
      </ul>
      <ul className="footer-top__nav">
        <li>
          <h2>Explore</h2>
        </li>
        <li className='footer-top-space'>
          <a href="#">Marketplace</a>
        </li>
        <li>
          <a href="#">Rankings</a>
        </li>
        <li>
          <a href="#">Connect a wallet</a>
        </li>
      </ul>
      <ul className="footer-top__nav">
        <li>
          <h2>Join our weekly digest</h2>
        </li>
        <li className='footer-top-space'>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
        </li>
        <li>btn</li>
      </ul>
    </div>
  );
}
 
export default FooterTop;