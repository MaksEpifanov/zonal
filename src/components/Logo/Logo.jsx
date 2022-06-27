import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from 'assets/logo.svg';
import './Logo.scss';

const Logo = () => (
  <Link to="/"><LogoSvg /></Link>
);

export default Logo;
