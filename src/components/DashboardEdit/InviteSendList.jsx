import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import useBooleanState from '../../hooks/useBooleanState';
import { useGetRequest, useMutationRequest } from '../../hooks/useRequest';
import ListTable, { DeleteButton } from '../common/ListTable';
import PaginationArrow from '../common/PaginationArrow';
import InviteMemberModal from '../Modal/Dashboard/InviteMemberModal';

const INVITE_SEND_LIST = 5;

const InviteSendList = ({ id }) => {
  const [page, setPage] = useState(1);
  const [isModalOpen, openModal, closeModal] = useBooleanState();

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
    queryKey: ['dashboard', 'invitations', 'delete', id],
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
      <InviteMemberModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        id={id}
        onSuccess={() => {
          setPage(1);
          request({ page, size: INVITE_SEND_LIST, dashboardId: id });
        }}
      />
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
          <button className="invite_button" onClick={openModal}>
            <img src="/src/assets/icon/add_box.svg" />
            <span>초대하기</span>
          </button>
        </div>
      </div>
      <ListTable column={column} data={data?.invitations} nolist={'초대 내역이 없습니다.'} />
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
  @media (max-width: 743px) {
    width: 17.75rem;
    height: 24.6875rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    width: 34rem;
  }
  .send_header {
    position: relative;
    display: flex;
    width: 38.75rem;
    height: 4.12rem;
    padding: 1.62rem 1.75rem 0 1.75rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    @media (max-width: 743px) {
      padding: 1.88rem 1.25rem 0 1.25rem;
      width: 17.75rem;
    }
    @media (min-width: 744px) and (max-width: 1220px) {
      width: 34rem;
    }
    .send_title {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: normal;
      @media (max-width: 743px) {
        font-size: 1.25rem;
      }
    }
    .send_invite {
      display: flex;
      align-items: center;
      gap: 1rem;
      @media (max-width: 743px) {
        align-items: end;
        flex-direction: column;
        position: absolute;
        top: 1.75rem;
        right: 1.25rem;
        z-index: 1;
      }
      .invite_button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        gap: 0.5rem;
        width: 6.5625rem;
        height: 2rem;
        border-radius: 0.25rem;
        background: ${({ theme }) => theme.color.violet};
        color: ${({ theme }) => theme.color.white};
        font-size: 0.825rem;
        font-weight: 500;
        @media (max-width: 743px) {
          width: 5.375rem;
          height: 1.75rem;
          font-size: 0.75rem;
          gap: 0.3rem;
        }
      }
    }
  }
`;
