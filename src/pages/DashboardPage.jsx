import styled from 'styled-components';
import ColumnList from '../components/DashboardPage/ColumnList';
import { useGetRequest, useMutationRequest } from '../hooks/useRequest';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import useBooleanState from '../hooks/useBooleanState';
import ColumnModal from '../components/Modal/Dashboard/ColumnModal';

const DashboardPage = () => {
  const { dashboardid } = useParams();
  const { data, request } = useGetRequest({
    requestPath: '/columns',
    queryKey: ['column', dashboardid],
  });
  const [isModalOpen, openModal, closeModal] = useBooleanState();

  const {
    request: updateRequest,
    isSuccess,
    isError,
    error,
  } = useMutationRequest({
    requestPath: `/columns`,
    queryKey: ['column', 'create'],
    method: 'POST',
  });

  const updateColumn = useCallback(
    (title) => {
      updateRequest({ title, dashboardId: Number(dashboardid) });
    },
    [dashboardid],
  );

  useEffect(() => {
    if (isSuccess) {
      request({ dashboardId: dashboardid });
      closeModal();
    }
    if (isError) {
      alert(error?.response?.data?.message ?? '오류가 발생했습니다.');
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    request({ dashboardId: dashboardid });
  }, [dashboardid]);

  return (
    <DashboardContainer>
      <ColumnModal
        modalInfo={{}}
        isModalOpen={isModalOpen}
        onSuccess={(title) => {
          updateColumn(title);
        }}
        closeModal={closeModal}
      />
      {data?.data?.map((e) => {
        return <ColumnList key={e.id} {...e} />;
      })}
      <NewColumnButton>
        <button
          className="new_button"
          onClick={() => {
            openModal();
          }}
        >
          새로운 컬럼 추가하기
          <img src="/src/assets/icon/dashboard_add_icon.svg" />
        </button>
      </NewColumnButton>
    </DashboardContainer>
  );
};

export default DashboardPage;

const DashboardContainer = styled.section`
  display: flex;
  height: calc(100vh - 4.38rem);
  min-width: 100%;

  @media (max-width: 743px) {
    flex-direction: column;
    width: 100%;
    min-width: 0;
    min-height: calc(100vh - 4.38rem);
    height: auto;
  }

  @media (min-width: 744px) and (max-width: 1220px) {
    flex-direction: column;
    min-height: calc(100vh - 4.38rem);
    min-width: 0;
    height: auto;
    width: 100%;
  }
`;

const NewColumnButton = styled.div`
  width: 24.625rem;
  height: 100%;
  padding: 1.25rem;
  border: 1px solid var(--gray-gray_EEEEEE, #eee);
  padding: 3.75rem 1.25rem;

  @media (max-width: 743px) {
    width: calc(100vw - 4.1875rem);
    padding: 1.25rem;
  }

  @media (min-width: 744px) and (max-width: 1220px) {
    width: 36.5rem;
    padding: 1.25rem;
  }
  .new_button {
    width: 22.125rem;
    height: 4.375rem;
    border-radius: 0.375rem;
    border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
    background: var(--white-white_FFFFFF, #fff);
    color: var(--black-black_333236, #333236);
    font-size: 1.125rem;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 743px) {
      width: 100%;
      height: 3.75rem;
      font-size: 1rem;
    }

    @media (min-width: 744px) and (max-width: 1220px) {
      width: 34rem;
    }
    img {
      margin-left: 0.75rem;
      display: flex;
      width: 1.375rem;
      height: 1.375rem;
      padding: 0.1875rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      background: ${({ theme }) => theme.color.violet_8p};
      @media (max-width: 743px) {
        width: 1.25rem;
        height: 1.25rem;
        padding: 0.17rem;
      }
    }
  }
`;
