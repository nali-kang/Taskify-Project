import styled from 'styled-components';
import { ReactComponent as LogoImage } from '@images/header_logo_main.svg';
import { ReactComponent as LogoText } from '@images/header_logo_taskify.svg';
import { Link } from 'react-router-dom';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';

const HeaderLogo = ({ className, color }) => {
  return (
    <Link to={'/'}>
      <Logo className={className} color={color}>
        <LogoImage className="logo_image" />
        <LogoText className="logo_text" />
      </Logo>
    </Link>
  );
};

export default HeaderLogo;

const Logo = styled.div`
  .logo_image {
    margin: 0.25rem 0 0.12rem 0.64rem;
  }
  .logo_text {
    margin: 0.75rem 0.12rem 0.32rem 0;
    ${MEDIA_QUERIES.onMobile} {
      display: none;
    }
  }
  & svg {
    fill: ${(props) => props.color};
  }
`;
