import Heading from '../UI/Heading';
import Text from '../UI/Text';
import './StatsSection.scss'

type StatItem = {
  label: string;
  count: string;
}
const StatItem = ({label, count}: StatItem) => {
  return (
    <div className="stat-item">
      <Heading level={5} label={count}/>
      <Text label={label}/>
    </div>
  )
}
const StatsSection = () => {
  return ( 
    <div className="stats-section">
        <StatItem
          label='Total Sale'
          count='240k+ '
        />
        <StatItem
          label='Auctions'
          count='100k+ '
        />
        <StatItem
          label='Artists'
          count='240k+ '
        />
    </div>
   );
}
 
export default StatsSection;