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
  }
  .nickname_text {
    color: var(--black-black_333236, #333236);
    font-size: 1rem;
    font-weight: 400;
  }
`;
