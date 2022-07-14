import { ReactComponent as SplitSVG } from 'assets/icons/split.svg';
import Button from '../../common/components/UI/Button';

const Test = () => (
  <div style={{
    height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
  }}
  >
    <Button icon={<SplitSVG />} onClick={() => {}}>Split</Button>
    <Button primary onClick={() => {}}>Start</Button>
    <Button item onClick={() => {}} onDelete={() => {}}>Moscow</Button>
    <Button item active onClick={() => {}} onDelete={() => {}}>Moscow</Button>
  </div>
);

export default Test;
