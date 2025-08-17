import './Header.scss'
import HeaderNav from './UI/HeaderNav';
import Logo from './UI/Logo';
const Header = () => {
  return (  
    <div className="header">
      <Logo/>
      <HeaderNav/>
    </div>
  );
}
 
export default Header;