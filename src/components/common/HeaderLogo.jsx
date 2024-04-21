import styled from 'styled-components';
import { ReactComponent as LogoImage } from '@images/header_logo_main.svg';
import { ReactComponent as LogoText } from '@images/header_logo_taskify.svg';

const HeaderLogo = ({ className, color }) => {
  return (
    <Logo className={className} color={color}>
      <LogoImage className="logo_image" />
      <LogoText className="logo_text" />
    </Logo>
  );
};

export default HeaderLogo;

const Logo = styled.div`
  .logo_image {
    margin: 0.25rem 0 0.12rem 0.64rem;
  }
  .logo_text {
    margin: 0.75rem 0.12rem 0.32rem 0;
    @media (max-width: 743px) {
      display: none;
    }
  }
  & svg {
    fill: ${(props) => props.color};
  }
`;
