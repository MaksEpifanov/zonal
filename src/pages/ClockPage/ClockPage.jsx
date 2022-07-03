import Clock from 'components/Clock';

import style from './ClockPage.module.scss';

const ClockPage = () => (
  <div className={style.ClockPage}>
    <Clock timeZone={2} />
  </div>
);
export default ClockPage;
