import { Link } from 'react-router-dom';
import styled from 'styled-components';
import email_icon from '@icon/email_icon.png';
import facebook_icon from '@icon/facebook_icon.png';
import instagram_icon from '@icon/instagram_icon.png';

const MainFooter = () => {
  return (
    <FooterContainer>
      <p className="footer_text">©codeit - 2024</p>
      <div className="footer_link">
        <Link className="footer_text">Privacy Policy</Link>
        <Link className="footer_text">FAQ</Link>
      </div>
      <div className="footer_shared">
        <Link to={'https://mail.google.com/'} target="_blank">
          <img src={email_icon} />
        </Link>
        <Link to={'https://www.facebook.com/'} target="_blank">
          <img src={facebook_icon} />
        </Link>
        <Link to={'https://www.instagram.com/'} target="_blank">
          <img src={instagram_icon} />
        </Link>
      </div>
    </FooterContainer>
  );
};

export default MainFooter;

const FooterContainer = styled.footer`
  width: 100vw;
  height: 6.25rem;
  background-color: ${({ theme }) => theme.color.black_00};
  padding: 2.5rem 8.81rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 743px) {
    height: 13.495rem;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0 0 5.62rem 0;
    gap: 0.75rem;
  }

  @media (min-width: 744px) and (max-width: 1220px) {
    padding: 2.5rem 2.5rem;
  }

  .footer_text {
    color: ${({ theme }) => theme.color.gray_9F};
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 743px) {
      font-size: 0.75rem;
    }
  }
  .footer_link {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media (max-width: 743px) {
      padding-bottom: 3.5rem;
      gap: 1.25rem;
    }
  }
  .footer_shared {
    display: flex;
    align-items: center;
    gap: 0.88rem;
    @media (max-width: 743px) {
      gap: 1.28rem;
      img {
        width: 1.02275rem;
        height: 1.02275rem;
      }
    }
  }
`;
