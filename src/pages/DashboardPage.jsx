import styled from 'styled-components';
import ColumnList from '../components/DashboardPage/ColumnList';
import { useGetRequest } from '../hooks/useRequest';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DashboardPage = () => {
  const { dashboardid } = useParams();
  const { data, request } = useGetRequest({
    requestPath: '/columns',
    queryKey: ['column', dashboardid],
  });

  useEffect(() => {
    request({ dashboardId: dashboardid });
  }, []);
  return (
    <DashboardContainer>
      {data?.data?.map((e) => {
        return <ColumnList key={e.id} {...e} />;
      })}
    </DashboardContainer>
  );
};

export default DashboardPage;

const DashboardContainer = styled.section`
  display: flex;
  height: 100vh;
  min-width: 100vw;
`;
