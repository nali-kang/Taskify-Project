import { useCallback, useState } from 'react';
import styled from 'styled-components';
import ListTable, { DeleteButton } from '../common/ListTable';
import PaginationArrow from '@components/common/PaginationArrow';
import { useGetRequest, useMutationRequest } from '../../hooks/useRequest';
import { useEffect } from 'react';
import UserName from '../common/UserName';

const MEMBER_SIZE = 4;

const MemberList = ({ id }) => {
  const [page, setPage] = useState(1);

  const column = [
    {
      title: '이름',
      dataIndex: 'nickname',
      render: (value, record) => {
        return <UserName email={record.email} nickname={value} />;
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
                mutationRequest({ memberId: value });
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
    request: mutationRequest,
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
      <ListTable column={column} data={data?.members} nolist={'구성원이 존재하지 않습니다.'} />
    </MemberListContainer>
  );
};

export default MemberList;

const MemberListContainer = styled.article`
  width: 38.75rem;
  height: 25.25rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
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
