import { useEffect, useState } from 'react';
import styled from 'styled-components';
import default_avatar from '../../assets/images/default_avatar.png';

const AvatarList = ({ max, users }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // api로 부터 받아온 댓글 사용자 데이터 넣기
      setData(users);
    }, 100);
  }, []);

  return (
    <AvatarGroup max={max}>
      {data.map(({ name, profileImageUrl, id, isOwner }) => {
        if (isOwner) return null;
        return <Avatar key={id} alt={name} src={profileImageUrl || default_avatar} />;
      })}
    </AvatarGroup>
  );
};

const AvatarGroup = styled.div`
  display: flex;
  max-width: fit-content;
  align-items: center;
  margin-right: 1.5rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ theme }) => theme.color.pink};
  margin-right: -10px; // 아바타들이 겹치게
  cursor: pointer;

  &:hover {
    z-index: 1; // 호버 시 겹치는 아바타들 중 위에 표시
  }
`;

export default AvatarList;
