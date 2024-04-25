import { useMemo } from 'react';
import styled, { css } from 'styled-components';

const ListTable = ({ column, data, target, reverse = false }) => {
  const targetDiv = useMemo(() => {
    return <div ref={target} className="target" />;
  }, [target]);
  return (
    <TableContainer length={column.length}>
      {reverse && (
        <ReverseTable>
          {data?.map((dataElement) => {
            return (
              <div className="data_table_row" key={dataElement.id + 'R'}>
                {column.map((columnElement) => (
                  <div key={dataElement.id + columnElement.dataIndex} className="data_col">
                    <p className="title">{columnElement.title}</p>
                    {columnElement?.render
                      ? columnElement?.render(dataElement[columnElement.dataIndex], dataElement)
                      : dataElement[columnElement.dataIndex]}
                  </div>
                ))}
              </div>
            );
          })}
        </ReverseTable>
      )}

      <table className={reverse ? 'data_table reverse' : 'data_table'}>
        <thead>
          {column.map((e) => (
            <th key={e.dataIndex} className="header_column">
              {e.title}
            </th>
          ))}
        </thead>
        <tbody>
          {data ? (
            data?.map((dataElement) => {
              return (
                <tr key={dataElement.id} className="table_row">
                  {column.map((columnElement) => (
                    <td key={dataElement.id + columnElement.dataIndex} className="table_column">
                      {columnElement?.render
                        ? columnElement?.render(dataElement[columnElement.dataIndex], dataElement)
                        : dataElement[columnElement.dataIndex]}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </table>
      {target ? <>{targetDiv}</> : <></>}
    </TableContainer>
  );
};

export default ListTable;

const table = css`
  width: 100%;
  white-space: nowrap;
  text-align: left;
`;

const TableContainer = styled.div`
  width: 100%;
  max-height: 29.94rem;
  overflow-y: auto;
  .target {
    height: 1px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  .data_table {
    &.reverse {
      @media (max-width: 743px) {
        display: none;
      }
    }
    ${table};
    thead {
      position: sticky;
      top: 0;
      height: 2.93rem;
      background-color: white;
      @media (max-width: 743px) {
        height: 2.2rem;
      }
      @media (min-width: 744px) and (max-width: 1400px) {
        height: 2.42rem;
      }
      .header_column {
        width: calc(100% / ${(props) => props.length});
        padding: 1.5rem 1.5rem 0 1.5rem;
        color: ${({ theme }) => theme.color.gray_9F};
        font-family: Pretendard;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        @media (max-width: 743px) {
          font-size: 0.875rem;
        }
      }
    }
    tbody {
      margin-top: 2.93rem;
      @media (max-width: 743px) {
        margin-top: 2.2rem;
      }

      @media (min-width: 744px) and (max-width: 1400px) {
        margin-top: 2.42rem;
      }
      .table_row {
        height: 4.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.color.gray_EE};
        @media (max-width: 743px) {
          height: 3.62rem;
          font-size: 0.875rem;
        }
        @media (min-width: 744px) and (max-width: 1400px) {
          height: 4.38rem;
        }
        &:last-child {
          border: none;
        }
      }
      .table_column {
        padding-left: 1.5rem;
      }
    }
  }
`;
export const DeleteButton = styled.div`
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
    border: 1px solid ${({ theme }) => theme.color.gray_D9};
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.violet};
    font-size: 0.875rem;
    font-weight: 500;
  }
  @media (max-width: 743px) {
    padding-right: 1.25em;
    .delete_button {
      width: 3.25rem;
      height: 1.75rem;
      font-size: 0.75rem;
    }
  }
`;

const ReverseTable = styled.section`
  display: none;
  @media (max-width: 743px) {
    display: block;
    .data_table_row {
      height: 7.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.color.gray_EE};
      display: flex;
      flex-direction: column;
      color: var(--black-black_333236, #333236);
      font-size: 0.875rem;
      font-weight: 400;
      line-height: normal;
      gap: 0.62rem;
      padding: 1rem;
      &:last-child {
        border: none;
      }
      .data_col {
        display: flex;
        align-items: center;
        .title {
          width: 4rem;
          color: var(--gray-gray_9FA6B2, #9fa6b2);
        }
      }
    }
    .target {
      height: 1px;
    }
  }
`;
