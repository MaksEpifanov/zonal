import { useEffect } from 'react';
import useLang from 'common/hooks/useLang';
import { ReactComponent as LangSvgEN } from 'assets/icons/langEN.svg';
import { ReactComponent as LangSvgRU } from 'assets/icons/langRU.svg';
import PropTypes from 'prop-types';

const LangToggle = ({ className }) => {
  const [lang, setLang] = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <button type="button" className={className} onClick={setLang}>
      {lang === 'en' ? <LangSvgEN /> : <LangSvgRU />}
    </button>
  );
};

export default LangToggle;

LangToggle.propTypes = {
  className: PropTypes.string,
};

LangToggle.defaultProps = {
  className: '',
};
