import PropTypes from 'prop-types';
import s from './Statistics.module.css'
import randomColor from './randomColor'

export default function Statistics({
  title,
  stats,
}) {
    return (
        <section className={s.statistics}>

            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                {stats.map(data => (
                    <li
                        key={data.id}
                        className={s.item}
                        style={{ backgroundColor: randomColor(), flexBasis: `calc(100%/${stats.length})` }}
                    >
                        <span className={s.label}>{data.label}</span>
                        <span className={s.percentage}>{data.percentage}</span>
                    </li>
                ))}
                
            </ul>
            </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};