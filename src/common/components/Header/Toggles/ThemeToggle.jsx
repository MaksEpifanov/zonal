import { useEffect } from 'react';
import useTheme from 'common/hooks/useTheme';
import { ReactComponent as ThemeSvgLight } from 'assets/icons/theme-light.svg';
import { ReactComponent as ThemeSvgDark } from 'assets/icons/theme-dark.svg';
import PropTypes from 'prop-types';

const ThemeToggle = ({ className }) => {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button type="button" className={className} onClick={setTheme}>
      {theme === 'dark' ? <ThemeSvgLight /> : <ThemeSvgDark /> }
    </button>
  );
};
export default ThemeToggle;

ThemeToggle.propTypes = {
  className: PropTypes.string,
};

ThemeToggle.defaultProps = {
  className: '',
};
