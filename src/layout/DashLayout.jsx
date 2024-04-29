import styled from 'styled-components';
import Sidebar from '../components/sidebar/SideBar';
import DashBoardHeader from '../components/dashboard/DashBoardHeader';
import MEDIA_QUERIES from '../constants/MEDIA_QUERIES';

// 초기 대시보드 데이터 배열
const dashboards = [
  { id: '1', color: '#FFA500', name: '대시보드 1', createdByMe: true },
  { id: '2', color: '#FF2660', name: '대시보드 2', createdByMe: true },
  { id: '3', color: '#7AC555', name: '대시보드 3', createdByMe: false },
];

const DashLayout = ({ children, myPage, openInviteModal }) => {
  const MY_IMAGE_URL = null;
  const invitedUsers = [
    { id: 1, profileImageUrl: 'https://i.ibb.co/kgykYbx/Ellipse-38.png' },
    { id: 2, profileImageUrl: 'https://i.ibb.co/tPyNYb1/Ellipse-39.png' },
    { id: 3, profileImageUrl: 'https://i.ibb.co/VgZHtYL/Ellipse-40.png' },
    { id: 4, profileImageUrl: 'https://i.ibb.co/VgZHtYL/Ellipse-38.png' },
    { id: 5, profileImageUrl: 'https://i.ibb.co/VgZHtYL/Ellipse-39.png' },
    { id: 6, profileImageUrl: 'https://i.ibb.co/VgZHtYL/Ellipse-40.png' },
  ];

  return (
    <LayoutDiv>
      <Sidebar dashboards={dashboards} />
      <DashBoardHeader
        dashboardName={dashboards[0].name}
        createdByMe={dashboards[0].createdByMe}
        profileName="김수정"
        profileImgURL={MY_IMAGE_URL}
        invitedUsers={invitedUsers}
        openInviteModal={openInviteModal}
        myPage={myPage}
      />
      <BodyDiv>{children}</BodyDiv>
    </LayoutDiv>
  );
};

const LayoutDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100vh;
  margin-right: 10%;
  background-color: ${({ theme }) => theme.color.gray_FA};
`;

const BodyDiv = styled.div`
  padding: 2rem 0 0 0;

  ${MEDIA_QUERIES.onTablet} {
    padding-left: 1rem;
  }

  ${MEDIA_QUERIES.onMobile} {
    padding: 3rem 0 0 3.35rem;
  }
`;

export default DashLayout;
