import styled from 'styled-components';
import { hexColorEncode } from '../../common/util';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';

const AvatarList = ({ max, users, size }) => {
  return (
    <AvatarGroup>
      {users?.map(({ nickname, profileImageUrl, isOwner }) => {
        if (isOwner) return null;
        return profileImageUrl ? (
          <Avatar src={profileImageUrl} alt="프로필 이미지" />
        ) : (
          <Circle color={hexColorEncode(nickname)}>{nickname.slice(0, 1).toUpperCase()}</Circle>
        );
      })}
      {max > size ? <Circle color="#F4D7DA"> {`+${max - (size + 1)}`}</Circle> : <></>}
    </AvatarGroup>
  );
};

const AvatarGroup = styled.div`
  display: flex;
  max-width: fit-content;
  align-items: center;
  margin-right: 2rem;
  padding-right: 2.5rem;
  border-right: 1px solid ${({ theme }) => theme.color.gray_D9};
  ${MEDIA_QUERIES.onMobile} {
    margin-right: 0.75rem;
    padding-right: 1rem;
  }
`;

const Avatar = styled.img`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 50%;
  border: 3px solid white;
  margin-right: -0.5rem; // 아바타들이 겹치게

  ${MEDIA_QUERIES.onMobile} {
    width: 2.125rem;
    height: 2.125rem;
  }
  &:hover {
    z-index: 1; // 호버 시 겹치는 아바타들 중 위에 표시
  }
  .img_circle {
    background-color: ${(props) => props.color};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const Circle = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 50%;
  border: 3px solid white;
  margin-right: -10px; // 아바타들이 겹치게
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
  }
`;
export default AvatarList;
