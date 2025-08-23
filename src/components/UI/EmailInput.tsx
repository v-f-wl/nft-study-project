import Button from './Button';
import './EmailInput.scss'
const EmailInput = () => {
  return ( 
    <div className="email-input">
      <input type="text" className="email-input__body"  placeholder='Enter your email here'/> 
      <Button
        onClick={() => {}}
        label='Subscribe'
      />
    </div>
   );
}
 
export default EmailInput;