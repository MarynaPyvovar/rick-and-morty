import { ThreeCircles } from 'react-loader-spinner';
import st from 'components/Loader/Loader.module.scss';

const Loader: React.FC = () => {
  return <div className={st.wrapper}>
    <ThreeCircles
      height="80"
      width="80"
      color="#10B1B1"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  </div>
}

export default Loader
