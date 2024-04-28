import styled from 'styled-components';
import { hexColorEncode } from '../../common/util';

const UserName = ({ email, nickname }) => {
  return (
    <NameContents color={hexColorEncode(email)}>
      <div className="img_circle">{email.slice(0, 1).toUpperCase()}</div>
      <span className="nickname_text">{nickname}</span>
    </NameContents>
  );
};

export default UserName;

const NameContents = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  @media (max-width: 743px) {
    gap: 0.5rem;
  }
  .img_circle {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 100%;
    background-color: ${(props) => props.color};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;

    @media (max-width: 743px) {
      width: 2.125rem;
      height: 2.125rem;
      font-size: 0.875rem;
    }
  }
  .nickname_text {
    color: 1px solid ${({ theme }) => theme.color.black_33};
    font-size: 1rem;
    font-weight: 400;
    @media (max-width: 743px) {
      font-size: 0.875rem;
    }
  }
`;
