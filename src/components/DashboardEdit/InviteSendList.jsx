import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetRequest, useMutationRequest } from '../../hooks/useRequest';
import ListTable, { DeleteButton } from '../common/ListTable';
import PaginationArrow from '../common/PaginationArrow';

const INVITE_SEND_LIST = 5;

const InviteSendList = ({ id }) => {
  const [page, setPage] = useState(1);

  const changePage = useCallback((page) => {
    setPage(page);
  }, []);

  const column = [
    {
      title: '이메일',
      dataIndex: 'invitee',
      render: (value) => {
        return <span>{value.email}</span>;
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
                mutationRequest({ invitationId: value });
              }}
            >
              취소
            </button>
          </DeleteButton>
        );
      },
    },
  ];

  const { data, request } = useGetRequest({
    queryKey: ['dashboards-invite', id],
    requestPath: `/dashboards/${id}/invitations`,
  });

  const {
    request: mutationRequest,
    isSuccess,
    isError,
    error,
  } = useMutationRequest({
    requestPath: `/dashboards/${id}/invitations/:invitationId`,
    queryKey: ['dashboard', 'invitations', 'delete'],
    method: 'DELETE',
  });

  useEffect(() => {
    request({ page, size: INVITE_SEND_LIST, dashboardId: id });
  }, [page]);

  useEffect(() => {
    if (isSuccess) {
      setPage(1);
      request({ page: 1, size: INVITE_SEND_LIST, dashboardId: id });
    }
    if (isError) {
      alert(error);
    }
  }, [isSuccess, isError]);

  return (
    <SendListContainer>
      <div className="send_header">
        <h1 className="send_title">초대내역</h1>
        <div className="send_invite">
          <PaginationArrow
            page={page}
            size={INVITE_SEND_LIST}
            total={data?.totalCount}
            changePage={changePage}
            showPageInfo={true}
          />
          <button className="invite_button">
            <img src="/src/assets/icon/add_box.svg" />
            <span>초대하기</span>
          </button>
        </div>
      </div>
      <ListTable column={column} data={data?.invitations} />
    </SendListContainer>
  );
};

export default InviteSendList;

const SendListContainer = styled.article`
  width: 38.75rem;
  height: 29.8125rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
  margin-top: 0.75rem;
  .send_header {
    display: flex;
    width: 38.75rem;
    height: 4.12rem;
    padding: 1.62rem 1.75rem 0 1.75rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    .send_title {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: normal;
    }
    .send_invite {
      display: flex;
      align-items: center;
      gap: 1rem;
      .invite_button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 6.5625rem;
        height: 2rem;
        border-radius: 0.25rem;
        background: ${({ theme }) => theme.color.violet};
        color: ${({ theme }) => theme.color.white};
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
`;
