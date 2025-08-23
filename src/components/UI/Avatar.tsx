import './Avatar.scss'
type Avatar = {
  imageUrl: string;
  userName: string;
  className?: string
}
const Avatar = ({
  imageUrl,
  userName,
  className
}: Avatar) => {
  return (  
    <div className={`avatar ${className}`}>
      <div className="avatar__img">
        <img src={imageUrl} alt={`user name is ${userName}`} />
      </div>
      <div className="avatar__label">{userName}</div>
    </div>
  );
}
 
export default Avatar;