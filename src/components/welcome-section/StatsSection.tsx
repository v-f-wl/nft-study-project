import './StatsSection.scss'

type StatItem = {
  label: string;
  count: string;
}
const StatItem = ({label, count}: StatItem) => {
  return (
    <div className="stat-item">
      <div className="stat-item__count">{count}</div>
      <div className="stat-item__label">{label}</div>
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