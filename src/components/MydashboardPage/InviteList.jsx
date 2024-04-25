import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useInfinityRequest, useMutationRequest } from '@hooks/useRequest';
import ListTable from '../common/ListTable';
import { queryClient } from '../../App';

const DEFAULT_INVITE_LIST_SIZE = 7;

const InviteList = () => {
  const column = [
    {
      title: '이름',
      dataIndex: 'dashboard',
      render: (value) => <span>{value.title}</span>,
    },
    {
      title: '초대자',
      dataIndex: 'inviter',
      render: (value) => <span>{value.nickname}</span>,
    },
    {
      title: '수락 여부',
      dataIndex: 'id',
      render: (value) => (
        <InviteAcceptedButton>
          <button
            className="accept_button"
            onClick={() => {
              mutaionRequest({ inviationId: value, inviteAccepted: true });
            }}
          >
            수락
          </button>
          <button
            className="reject_button"
            onClick={() => {
              mutaionRequest({ inviationId: value, inviteAccepted: false });
            }}
          >
            거절
          </button>
        </InviteAcceptedButton>
      ),
    },
  ];

  const [inviteList, setInviteList] = useState([]);
  const [title, setTitle] = useState('');

  const { data, fetchNextPage, setTarget } = useInfinityRequest({
    queryKey: ['invitations', title],
    requestParam: title
      ? { size: DEFAULT_INVITE_LIST_SIZE, title }
      : { size: DEFAULT_INVITE_LIST_SIZE },
    requestPath: '/invitations',
    method: 'GET',
  });

  useEffect(() => {
    if (data?.pages.length > 0) {
      setInviteList([...inviteList, ...data.pages[data.pages.length - 1].invitations]);
    }
    data?.pages?.invitations;
  }, [data]);

  const {
    request: mutaionRequest,
    isSuccess,
    isError,
    error,
  } = useMutationRequest({
    requestPath: '/invitations/:inviationId',
    queryKey: ['invitations', 'accept'],
    method: 'PUT',
  });

  useEffect(() => {
    fetchNextPage();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      queryClient.resetQueries({ queryKey: ['invitations', ''], exact: true });
      setInviteList([]);
      fetchNextPage();
    }
    if (isError) {
      alert(error);
    }
  }, [isSuccess, isError]);

  return (
    <InviteContainer>
      <h1 className="invite_title">초대받은 대시보드</h1>
      <div className="invite_search_box">
        <img src="/src/assets/icon/search_icon.svg" />
        <input
          className="invite_search"
          placeholder="검색"
          onChange={(e) => {
            setTitle(e.target.value);
            queryClient.resetQueries({ queryKey: ['invitations', e.target.value], exact: true });
            setInviteList([]);
            fetchNextPage();
          }}
        />
      </div>
      <ListTable column={column} data={inviteList} target={setTarget} />
    </InviteContainer>
  );
};

export default InviteList;

const InviteContainer = styled.section`
  width: 63.875rem;
  max-height: 37.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};

  .invite_title {
    color: ${({ theme }) => theme.color.black_33};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
    padding: 2rem 1.75rem 1.25rem;
  }

  .invite_search_box {
    width: 60.375rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9};
    background: ${({ theme }) => theme.color.white};
    margin-left: 1.75rem;
    padding: 0.5rem 1rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    .invite_search {
      width: 100%;
      font-size: 1rem;
      font-weight: 400;
      line-height: normal;
      background: ${({ theme }) => theme.color.white};
      border: none;
      color: ${({ theme }) => theme.color.black_33};
      ::placeholder {
        color: ${({ theme }) => theme.color.gray_9F};
      }
      &:focus-visible {
        outline: none;
      }
    }
  }
`;

const InviteButton = css`
  display: flex;
  width: 5.25rem;
  height: 2rem;
  padding: 0.4375rem 1.8125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: normal;
`;

const InviteAcceptedButton = styled.div`
  display: flex;
  gap: 0.625rem;

  .accept_button {
    ${InviteButton};
    background: ${({ theme }) => theme.color.violet};
    color: ${({ theme }) => theme.color.white};
  }

  .reject_button {
    ${InviteButton};
    border: 1px solid ${({ theme }) => theme.color.gray_D9};
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.violet};
  }
`;
