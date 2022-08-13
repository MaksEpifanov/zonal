import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    2022 | By Maks Epifanov | Open Source |
    {' '}
    <a href="https://github.com/MaksEpifanov/zonal" target="_blank" rel="noreferrer">GitHub</a>
  </div>
);

export default Footer;
