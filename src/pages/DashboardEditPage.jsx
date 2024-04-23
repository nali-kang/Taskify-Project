import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '@icon/arrow_left.svg';
import styled from 'styled-components';
import DashboardSetting from '../components/DashboardEdit/DashboardSetting';
import MemberList from '../components/DashboardEdit/MemberList';

const DashboardEditPage = () => {
  const { dashboardid } = useParams();

  return (
    <DashboardEditContainer>
      <Link className="back_link" to={`/dashboard/${dashboardid}`}>
        <ArrowLeft fill="#333333" />
        <span>돌아가기</span>
      </Link>
      <DashboardSetting id={dashboardid} />
      <MemberList id={dashboardid} />
      {dashboardid}
    </DashboardEditContainer>
  );
};

export default DashboardEditPage;

const DashboardEditContainer = styled.section`
  padding: 1.25rem;
  color: ${({ theme }) => theme.color.black_33};
  .back_link {
    display: flex;
    gap: 0.37rem;
    align-items: center;
    color: ${({ theme }) => theme.color.black_33};
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;
  }
`;
