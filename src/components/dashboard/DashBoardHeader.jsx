import { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import AvatarList from '../dashboard/AvatarList';
import users from '../dashboard/mockData';
import { BUTTON_TYPE } from '../../constants/BUTTON_TYPE';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';
import default_avatar from '../../assets/images/default_avatar.png';
import crown from '../../assets/icon/crown.png';
import setting_icon from '../../assets/icon/setting_icon.png';
import invite_icon from '../../assets/icon/invite_icon.png';
import { useNavigate } from 'react-router-dom';

const DashBoardHeader = ({
  dashboardName,
  createdByMe,
  profileName,
  profileImgURL,
  // eslint-disable-next-line no-unused-vars
  invitedUsers,
  inviteSendList,
  myPage,
  boardId,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [myProfile, setMyProfile] = useState({
    name: profileName,
    profileImageUrl: profileImgURL || default_avatar,
  });

  const navigate = useNavigate();

  const handleManageClick = () => {
    navigate(`/dashboard/${boardId}/edit`);
  };

  return (
    <HeaderDiv>
      <MenuDiv>
        {dashboardName}
        {createdByMe && (
          <img src={crown} alt="Crown Icon" style={{ width: '20px', height: '16px' }} />
        )}
      </MenuDiv>

      <BtnUserDiv>
        <BtnDiv $myPage={myPage}>
          <BtnStyle onClick={handleManageClick} styleType={BUTTON_TYPE.SECONDARY} size="S">
            <img src={setting_icon} alt="Setting" />
            관리
          </BtnStyle>
          <BtnStyle onClick={inviteSendList} styleType={BUTTON_TYPE.SECONDARY} size="S">
            <img src={invite_icon} alt="Invite" />
            초대하기
          </BtnStyle>
        </BtnDiv>
        <AvatarList max={5} users={users} />
        <ProfileDiv style={{ display: myPage ? 'none' : 'flex' }}>
          <ProfileImg src={myProfile.profileImageUrl} alt="프로필 이미지" width={38} height={38} />
          <ProfileName>{myProfile.name}</ProfileName>
        </ProfileDiv>
      </BtnUserDiv>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 98;

  width: 100%;
  height: 3.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray_D9};

  background-color: ${({ theme }) => theme.color.white};
  ${MEDIA_QUERIES.onPc} {
    padding-left: 16.5rem;
  }
  ${MEDIA_QUERIES.onTablet} {
    padding-left: 8.8rem;
  }
  ${MEDIA_QUERIES.onMobile} {
    padding-left: 3.685rem;
    height: 5.28rem;
  }
`;

const MenuDiv = styled.div`
  display: flex;
  gap: 0.275rem;
  align-items: center;
  padding-left: 2rem;

  font-weight: 700;
  font-size: 1.1rem;

  ${MEDIA_QUERIES.onTablet} {
    display: none;
  }
  ${MEDIA_QUERIES.onMobile} {
    display: none;
  }
`;

const BtnUserDiv = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
`;

const BtnDiv = styled.div`
  display: flex;
  gap: 0.55rem;
  margin-right: 2rem;

  ${MEDIA_QUERIES.onMobile} {
    gap: 0.33rem;
  }
`;

const BtnStyle = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.7rem;
  gap: 0.2rem;
  width: 6.6rem;
  height: 2.2rem;

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.2rem;
  }

  color: ${({ theme }) => theme.color.gray_9F};
  font-size: 0.85rem;

  ${MEDIA_QUERIES.onMobile} {
    padding: 0.6rem 1.2rem;
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 2.2rem 0 1.76rem;
  border-left: 1px solid ${({ theme }) => theme.color.gray_D9};
  gap: 0.55rem;

  ${MEDIA_QUERIES.onMobile} {
    padding: 0 0.55rem;
  }
`;
const ProfileImg = styled.img`
  border-radius: 50%;
`;
const ProfileName = styled.div`
  font-size: 0.88rem;
  font-weight: 500;

  ${MEDIA_QUERIES.onMobile} {
    display: none;
  }
`;

export default DashBoardHeader;
