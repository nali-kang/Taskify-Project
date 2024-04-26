import styled from 'styled-components';
import { useGetRequest } from '../../hooks/useRequest';
import { useEffect } from 'react';
import { hexColorEncode } from '../../common/util';

const ColumnList = ({ id, title }) => {
  const { data, request } = useGetRequest({
    requestPath: '/cards',
    queryKey: ['cards', id],
  });

  useEffect(() => {
    request({ columnId: id });
  }, []);

  return (
    <ColumnContainer>
      <ColumnTitle color="#333333">
        <div className="title_area">
          <img className="dot" />
          <h1 className="title">
            {title} {id}
          </h1>
          <p className="count">{data?.cards?.length ?? 0}</p>
        </div>
        <button className="setting_button">
          <img src="/src/assets/icon/setting_icon.svg" />
        </button>
      </ColumnTitle>
      <CardList>
        <button className="card_default new_card">
          <img src="/src/assets/icon/dashboard_add_icon.svg" />
        </button>
        {data?.cards?.map((e) => {
          return (
            <button key={e.id} className="card_default column_card">
              {e?.imageUrl && <img className="card_img" src={e?.imageUrl} />}
              <strong className="title">{e.title}</strong>
              <TagList>
                {e?.tags?.map((tag, i) => {
                  return (
                    <Tag key={tag + '' + i} color={hexColorEncode(tag)}>
                      {tag}
                    </Tag>
                  );
                })}
              </TagList>
              <div className="card_info">
                <p className="date">
                  <img src="/src/assets/icon/calendar_icon.png" />
                  {e.dueDate}
                </p>
                <UserCircle color={hexColorEncode(e.assignee.nickname)}>
                  {e.assignee.nickname.slice(0, 1).toUpperCase()}
                </UserCircle>
              </div>
            </button>
          );
        })}
      </CardList>
    </ColumnContainer>
  );
};

export default ColumnList;

const ColumnContainer = styled.article`
  width: 22.125rem;
  height: 100vh;
  padding: 1.25rem;
  border: 1px solid var(--gray-gray_EEEEEE, #eee);
  overflow-y: auto;
`;

const ColumnTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  .title_area {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 100%;
      margin-right: 0.5rem;
      border: 0;
      background-color: ${(props) => props.color};
    }
    .title {
      color: var(--black-black_333236, #333236);
      font-family: Pretendard;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .count {
      display: flex;
      width: 1.25rem;
      height: 1.25rem;
      padding: 0.1875rem 0.375rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      background: var(--gray-gray_EEEEEE, #eee);
      color: var(--gray-gray_787486, #787486);
      font-size: 0.75rem;
      font-weight: 500;
      line-height: normal;
    }
  }
  .setting_button {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    background: transparent;
    &:focus-visible,
    &:focus,
    &:hover {
      outline: none;
      border: none;
    }
  }
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .card_default {
    width: 19.625rem;
    min-height: 2.5rem;
    border-radius: 0.375rem;
    border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
    background: var(--white-white_FFFFFF, #fff);
    &.new_card {
      display: flex;
      justify-content: center;
      align-items: center;
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
    &.column_card {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.63rem;
      .card_img {
        width: 100%;
        border-radius: 0.375rem;
      }
      .title {
        color: var(--black-black_333236, #333236);
        font-family: Pretendard;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      .card_info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .date {
          display: flex;
          gap: 0.38rem;
          align-items: center;
          color: var(--gray-gray_787486, #787486);
          font-size: 0.75rem;
          font-weight: 500;
          line-height: normal;
        }
        .user {
          width: 1.5rem;
          height: 1.5rem;
          background: #a3c4a2;
          border-radius: 100%;
        }
      }
    }
  }
`;
const TagList = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  gap: 0.37rem;
`;
const Tag = styled.div`
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: normal;
  padding: 0.25rem 0.375rem;
  border-radius: 0.25rem;
`;
const UserCircle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 0.75rem;
  font-weight: 600;
`;
