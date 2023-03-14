import { ThreeCircles } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return <div>
    <ThreeCircles
      height="80"
      width="80"
      color="#70f731"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  </div>
}

export default Loader
