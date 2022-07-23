import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { formatTime } from 'pages/stopwatch/utils';

import styles from './Tables.module.scss';

const Tables = ({ data }) => {
  const columns = useMemo(() => ([
    { title: '№' },
    { title: 'Interval' },
    { title: 'Total' },
  ]), []);

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
          <td>{row.id + 1}</td>
          <td>{formatTime(row.lap)}</td>
          <td>{formatTime(row.total)}</td>
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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    interval: PropTypes.shape({
      min: PropTypes.number,
      sec: PropTypes.number,
      ms: PropTypes.number,
    }),
    total: PropTypes.shape({
      min: PropTypes.number,
      sec: PropTypes.number,
      ms: PropTypes.number,
    }),
    map: PropTypes.func,
  })).isRequired,
};
