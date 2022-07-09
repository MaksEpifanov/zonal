import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const Tables = ({ columns, data }) => {
  const thead = (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.title}
          >
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );

  const tbody = (
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.interval}</td>
          <td>{row.total}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className={styles.Tables}>
      {thead}
      {tbody}
    </table>
  );
};

export default Tables;

Tables.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    width: PropTypes.number,
    map: PropTypes.func,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    interval: PropTypes.string,
    total: PropTypes.string,
    map: PropTypes.func,
  })).isRequired,
};
