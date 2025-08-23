import EmailInput from '../../components/UI/EmailInput';
import Heading from '../../components/UI/Heading';
import Text from '../../components/UI/Text';
import './JoinSection.scss';

const JoinSection = () => {
  return ( 
    <div className="container">
      <div className="join-body">
        <div className="join-body__banner">
          <img src="/join/bg.png" alt="" />
        </div>
        <div className="">
          <Heading
            level={3}
            label='Join our weekly digest'
          />
          <Text 
            className='mt-10'
            label="Get exclusive promotions & updates straight to your inbox."
          />
          <EmailInput/>
        </div>
      </div>
    </div>
   );
}
 
export default JoinSection;