import logoImg from '../../assets/img/Logo-white.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const LogoWrapper=styled.div`
height:40px;
width:200px;
img{
  width:100%;
  height:100%;
  object-fit:contain;
}
`
function LogoWhite() {
    return (
        <LogoWrapper className='logo'>
           <Link to="/"><img src={logoImg} alt='logo'  /></Link>
        </LogoWrapper>
     );
  
}

export default LogoWhite