import IUser from '../icons/IUser';
import Button from './Button';
import './HeaderNav.scss'
const HeaderNav = () => {
  return ( 
    <div className="header-nav">
      <ul className="header-nav__list">
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Rankings</a></li>
        <li><a href="#">Connect a wallet</a></li>
      </ul>
      <Button 
        label='Sign Up' 
        icon={<IUser/>}
        onClick={() =>{}}
      />
    </div>
   );
}
 
export default HeaderNav;