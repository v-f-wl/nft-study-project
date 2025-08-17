import './Button.scss';
interface Button{
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const Button = ({label, onClick, icon}: Button) => {
  return ( 
    <div className="button" onClick={onClick}> 
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-label">{label}</span>
    </div>
  );
}
 
export default Button;