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
  background: var(--white-white_FFFFFF, #fff);
  margin-top: 1.56rem;
  padding: 1.75rem;
  .setting_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: var(--black-black_333236, #333236);
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
    h3 {
      color: var(--black-black_333236, #333236);
      font-size: 1.125rem;
      font-weight: 500;
      line-height: normal;
    }
    .name_setting {
      border-radius: 0.375rem;
      border: 1px solid var(--gray-gray_D9D9D9, #d9d9d9);
      background: var(--white-white_FFFFFF, #fff);
      height: 3rem;
      padding: 0.94rem 1rem 0.88rem 1rem;
      color: var(--black-black_333236, #333236);
      font-size: 1rem;
      font-weight: 400;
      line-height: normal;
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
      background: var(--violet-violet_5534DA, #5534da);
      text-align: center;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
