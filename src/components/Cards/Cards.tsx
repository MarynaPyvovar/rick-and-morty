import { Link, useLocation } from 'react-router-dom';

const Cards: React.FC = () => {
  const location = useLocation();

  return (
    <ul>
      <li key='1'><Link state={{from: location}} to='/1'>First card</Link></li>
    </ul>
  )
}

export default Cards
