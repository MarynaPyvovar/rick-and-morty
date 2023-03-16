import LogoImage from 'assets/LogoImage.png';
import st from 'components/Logo/Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <>
      <img src={LogoImage} alt="Logo" className={st.image} />
    </>
  )
}

export default Logo
