import styled from 'styled-components';
import { hexColorEncode } from '../../common/util';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';

const UserName = ({ nickname, img, nameHidden = false }) => {
  return (
    <NameContents color={hexColorEncode(nickname)} nameHidden={nameHidden}>
      {img ? (
        <ProfileImg src={img} alt="프로필 이미지" />
      ) : (
        <div className="img_circle">{nickname.slice(0, 1).toUpperCase()}</div>
      )}
      <span className="nickname_text">{nickname}</span>
    </NameContents>
  );
};

export default UserName;

const ProfileImg = styled.img`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 50%;
  ${MEDIA_QUERIES.onMobile} {
    width: 2.125rem;
    height: 2.125rem;
  }
`;

const NameContents = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  ${MEDIA_QUERIES.onMobile} {
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

    ${MEDIA_QUERIES.onMobile} {
      width: 2.125rem;
      height: 2.125rem;
      font-size: 0.875rem;
    }
  }
  .nickname_text {
    color: ${({ theme }) => theme.color.black_33};
    font-size: 1rem;
    font-weight: 400;
    ${MEDIA_QUERIES.onMobile} {
      display: ${(props) => (props.nameHidden ? 'none' : 'block')};
      font-size: 0.875rem;
    }
  }
`;
