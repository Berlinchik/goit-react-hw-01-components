import './Statistics.css'
import PropTypes from 'prop-types';

const Statistics = ({ title, stats, colors }) => {
    return <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
           {stats.map((stat, index) => <li className="item" key = {stat.id} style ={{backgroundColor: colors[index]}}  >
      <span className="statistics-label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>)}
  </ul>
</section>


}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired ,
    })),
    colors: PropTypes.array,
 }

export default Statistics;
