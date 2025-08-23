import './Button.scss';
interface Button{
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({label, onClick, icon, className = ''}: Button) => {
  return ( 
    <div className={`button ${className}`} onClick={onClick}> 
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-label">{label}</span>
    </div>
  );
}
 
export default Button;