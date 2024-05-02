import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useGetRequest, useMutationRequest } from '../../hooks/useRequest';
import SelectColorButton from '../common/SelectColorButton';

const DashboardSetting = ({ id }) => {
  const [color, setColor] = useState('');
  const [title, setTitle] = useState('');

  const { data, request, isSuccess } = useGetRequest({
    queryKey: ['dashboard-info', id],
    requestPath: `/dashboards/${id}`,
  });

  const { request: mutaionRequest, isSuccess: mutationSuccess } = useMutationRequest({
    requestPath: `/dashboards/${id}`,
    queryKey: ['dashboard-update', id],
    method: 'PUT',
  });

  useEffect(() => {
    request();
  }, [id]);

  useEffect(() => {
    if (isSuccess && data) {
      setColor(data.color);
      setTitle(data.title);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (mutationSuccess) {
      alert(mutationSuccess);
      request();
    }
  }, [mutationSuccess]);

  return (
    <SettingContainer>
      <div className="setting_title">
        <h2>{data?.title}</h2>
        <SelectColorButton color={color} setColor={(c) => setColor(c)} />
      </div>
      <div className="setting_name">
        <h3>대시보드 이름</h3>
        <input
          className="name_setting"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="setting_submit_area">
        <button
          className="setting_button"
          onClick={() => {
            mutaionRequest({ title, color });
          }}
        >
          변경
        </button>
      </div>
    </SettingContainer>
  );
};

export default DashboardSetting;

const SettingContainer = styled.article`
  width: 38.75rem;
  height: 16rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
  margin-top: 1.56rem;
  padding: 1.75rem;
  @media (max-width: 743px) {
    width: 17.75rem;
    height: 13.1875rem;
    margin-top: 1.31rem;
    padding: 1.25rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    width: 34rem;
  }
  .setting_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 743px) {
      flex-direction: column;
      gap: 1rem;
    }
    h2 {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: normal;
    }
  }
  .setting_name {
    display: flex;
    flex-direction: column;
    gap: 0.62rem;
    margin-top: 2.12rem;
    margin-bottom: 1.5rem;
    @media (max-width: 743px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    h3 {
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1.125rem;
      font-weight: 500;
      line-height: normal;
      @media (max-width: 743px) {
        display: none;
      }
    }
    .name_setting {
      border-radius: 0.375rem;
      border: 1px solid ${({ theme }) => theme.color.gray_D9};
      background: ${({ theme }) => theme.color.white};
      height: 3rem;
      padding: 0.94rem 1rem 0.88rem 1rem;
      color: ${({ theme }) => theme.color.black_33};
      font-size: 1rem;
      font-weight: 400;
      line-height: normal;
      @media (max-width: 743px) {
        height: 2.625rem;
        font-size: 0.875rem;
        padding: 0.81rem 1rem 0.75rem 1rem;
      }
    }
  }
  .setting_submit_area {
    display: flex;
    justify-content: end;
    .setting_button {
      display: flex;
      width: 5.25rem;
      height: 2rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      background: ${({ theme }) => theme.color.violet};
      text-align: center;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: normal;
      @media (max-width: 743px) {
        height: 1.75rem;
        font-size: 0.75rem;
      }
    }
  }
`;
