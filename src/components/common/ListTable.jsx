import styled, { css } from 'styled-components';

const ListTable = ({ column, data, target }) => {
  return (
    <>
      <TableContainer length={column.length}>
        <table className="data_table">
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
          {target ? <div ref={target} className="target" /> : <></>}
        </table>
      </TableContainer>
    </>
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
    ${table};
    thead {
      position: sticky;
      top: 0;
      height: 2.93rem;
      background-color: white;
      .header_column {
        width: calc(100% / ${(props) => props.length});
        padding: 1.5rem 1.5rem 0 1.5rem;
        color: ${({ theme }) => theme.color.gray_9F};
        font-family: Pretendard;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
    tbody {
      margin-top: 2.93rem;
      .table_row {
        height: 4.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.color.gray_EE};
        &:last-child {
          border: none;
        }
      }
      .table_column {
        padding-left: 1.5rem;
      }
    }
    .target {
      height: 1px;
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
`;
