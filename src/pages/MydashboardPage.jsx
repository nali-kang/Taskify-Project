import styled from 'styled-components';
import DashboardList from '@components/MydashboardPage/DashboardList';
import InviteList from '../components/MydashboardPage/InviteList';

const MydashboardPage = () => {
  return (
    <MydashboardContainer>
      <DashboardList />
      <InviteList />
    </MydashboardContainer>
  );
};

export default MydashboardPage;

const MydashboardContainer = styled.section`
  padding: 2.5rem;
  color: ${({ theme }) => theme.color.black_33};
`;
