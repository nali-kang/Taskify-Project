import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useGetRequest, useMutationRequest } from '../../hooks/useRequest';
import ListTable from '../common/ListTable';

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

  const { data, request } = useGetRequest({
    requestPath: '/invitations',
    queryKey: 'invitations',
  });

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
    request({});
  }, []);

  useEffect(() => {
    if (isSuccess) {
      request({});
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
        <input className="invite_search" placeholder="검색" />
      </div>
      <ListTable column={column} data={data?.invitations} />
    </InviteContainer>
  );
};

export default InviteList;

const InviteContainer = styled.section`
  width: 63.875rem;
  max-height: 37.5rem;
  border-radius: 0.5rem;
  background: var(--white-white_FFFFFF, #fff);
  .invite_title {
    color: var(--black-black_333236, #333236);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
    padding: 2rem 1.75rem 1.25rem;
  }
  .invite_search_box {
    width: 60.375rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
    background: var(--white-white_FFFFFF, #fff);
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
      background: var(--white-white_FFFFFF, #fff);
      border: none;
      color: #333236;
      ::placeholder {
        color: var(--gray-gray_9FA6B2, #9fa6b2);
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
    background: var(--violet-violet_5534DA, #5534da);
    color: var(--white-white_FFFFFF, #fff);
  }
  .reject_button {
    ${InviteButton};
    border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
    background: var(--white-white_FFFFFF, #fff);
    color: var(--violet-violet_5534DA, #5534da);
  }
`;
