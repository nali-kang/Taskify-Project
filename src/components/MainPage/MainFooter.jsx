import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainFooter = () => {
  return (
    <FooterContainer>
      <p className="footer_text">©codeit - 2024</p>
      <div className="footer_link">
        <Link className="footer_text">Privacy Policy</Link>
        <Link className="footer_text">FAQ</Link>
      </div>
      <div className="footer_shared">
        <Link>
          <img src="/src/assets/icon/email_icon.png" />
        </Link>
        <Link>
          <img src="/src/assets/icon/facebook_icon.png" />
        </Link>
        <Link>
          <img src="/src/assets/icon/instagram_icon.png" />
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
  .footer_text {
    color: ${({ theme }) => theme.color.gray_9F};
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
  }
  .footer_link {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .footer_shared {
    display: flex;
    align-items: center;
    gap: 0.88rem;
  }
`;
