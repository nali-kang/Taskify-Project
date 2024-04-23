import { useCallback, useState } from 'react';
import styled from 'styled-components';
import ListTable from '../common/ListTable';
import PaginationArrow from '@components/common/PaginationArrow';
import { useGetRequest, useMutationRequest } from '../../hooks/useRequest';
import { useEffect } from 'react';

const MEMBER_SIZE = 4;

const MemberList = ({ id }) => {
  const [page, setPage] = useState(1);

  const column = [
    {
      title: '이름',
      dataIndex: 'nickname',
      render: (value) => {
        return <span>{value}</span>;
      },
    },
    {
      title: '',
      dataIndex: 'id',
      render: (value) => {
        return (
          <DeleteButton>
            <button
              className="delete_button"
              onClick={() => {
                mutaionRequest({ memberId: value });
              }}
            >
              삭제
            </button>
          </DeleteButton>
        );
      },
    },
  ];

  const { data, request } = useGetRequest({
    queryKey: ['members', id],
    requestPath: `/members`,
  });

  const {
    request: mutaionRequest,
    isSuccess,
    isError,
    error,
  } = useMutationRequest({
    requestPath: '/members/:memberId',
    queryKey: ['members-delete'],
    method: 'DELETE',
  });

  useEffect(() => {
    request({ page, size: MEMBER_SIZE, dashboardId: id });
  }, [page]);

  useEffect(() => {
    if (isSuccess) {
      setPage(1);
      request({ page: 1, size: MEMBER_SIZE, dashboardId: id });
    }
    if (isError) {
      alert(error);
    }
  }, [isSuccess, isError]);

  const changePage = useCallback((page) => {
    setPage(page);
  }, []);

  return (
    <MemberListContainer>
      <div className="member_header">
        <h1 className="member_title">구성원</h1>
        <PaginationArrow
          page={page}
          size={MEMBER_SIZE}
          total={data?.totalCount}
          changePage={changePage}
          showPageInfo={true}
        />
      </div>
      <ListTable column={column} data={data?.members} />
    </MemberListContainer>
  );
};

export default MemberList;

const MemberListContainer = styled.article`
  width: 38.75rem;
  height: 25.25rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: var(--white-white_FFFFFF, #fff);
  margin-top: 0.75rem;
  .member_header {
    display: flex;
    width: 38.75rem;
    height: 4.12rem;
    padding: 1.62rem 1.75rem 0 1.75rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    .member_title {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

const DeleteButton = styled.div`
  width: 100%;
  padding-right: 1.75rem;
  .delete_button {
    float: right;
    display: flex;
    width: 5.25rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
    background: var(--white-white_FFFFFF, #fff);
    color: var(--violet-violet_5534DA, #5534da);
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
