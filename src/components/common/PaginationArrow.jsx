import { ReactComponent as ArrowLeft } from '@icon/arrow_left.svg';
import { ReactComponent as ArrowRight } from '@icon/arrow_right.svg';
import { useMemo } from 'react';
import styled from 'styled-components';

const PaginationArrow = ({ page, size, total, changePage, showPageInfo }) => {
  const lastPage = useMemo(() => Math.ceil(total / size), [total]);
  return (
    <PagingArrowContainer>
      {lastPage > 1 ? (
        <>
          {showPageInfo ? <p className="page_info">{`${lastPage} 페이지 중 ${page}`}</p> : <></>}
          <button
            onClick={() => {
              if (page !== 1) {
                changePage(page - 1);
              }
            }}
          >
            <ArrowLeft className="page_arrow left" fill={page === 1 ? '#D9D9D9' : '#787486'} />
          </button>
          <button
            onClick={() => {
              if (page !== lastPage) {
                changePage(page + 1);
              }
            }}
          >
            <ArrowRight
              className="page_arrow right"
              fill={page === lastPage ? '#D9D9D9' : '#787486'}
            />
          </button>
        </>
      ) : (
        <></>
      )}
    </PagingArrowContainer>
  );
};

export default PaginationArrow;

const PagingArrowContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    padding: 0;
    height: 2.5rem;
    background-color: transparent;
    border: none;
    &:focus,
    &:focus-visible {
      outline: 0;
    }
  }
  .page_arrow {
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid ${({ theme }) => theme.color.gray_D9};
    background: ${({ theme }) => theme.color.white};
    padding: 0.75rem;
    &.left {
      border-radius: 0.25rem 0rem 0rem 0.25rem;
    }
    &.right {
      border-radius: 0rem 0.25rem 0.25rem 0rem;
    }
  }
  .page_info {
    color: ${({ theme }) => theme.color.black_33};
    font-size: 0.875rem;
    font-weight: 400;
    margin-right: 1rem;
    line-height: 2.5rem;
  }
`;
