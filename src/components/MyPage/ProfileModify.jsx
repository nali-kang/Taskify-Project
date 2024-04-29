import styled from 'styled-components';
import ImgUpload from './ImgUpload';
import InputField from './Input';
import Button from '../common/Button';
import { BUTTON_TYPE } from '../../constants/BUTTON_TYPE';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';
import { useEffect, useState } from 'react';
import { useProfile } from '../../hooks/Profile/useProfile';
import { useProfileImgUpload } from '../../hooks/Profile/useProfileImgUpload';
import useProfileEdit from '../../hooks/Profile/useProfileEdit';

const ProfileModify = () => {
  // 프로필 데이터 불러오기
  const { data: profileData, isSuccess } = useProfile();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  // 프로필 편집
  const profileEdit = useProfileEdit();
  const profileImgUpload = useProfileImgUpload();

  // API
  useEffect(() => {
    if (isSuccess && profileData) {
      setEmail(profileData.data.email);
      setNickname(profileData.data.nickname);
    }
  }, [profileData, isSuccess]);

  // 프로필 업데이트 처리
  const handleProfileUpdate = () => {
    profileEdit.mutate({
      nickname: nickname,
      profileImgUrl: '',
    });
  };

  // 이미지 업로드
  const handleImgUpload = (file) => {
    profileImgUpload.mutate(file);
  };

  return (
    <Div>
      <Title>프로필</Title>
      <AlignBox>
        <ImgBox>
          <ImgContent>
            <ImgUpload edit={true} small={false} onUpload={handleImgUpload} />
          </ImgContent>
        </ImgBox>

        <InputBox>
          <EmailInput>
            <InputField
              label="이메일"
              id="email-input"
              type="email"
              value={email || '이메일 불러오는 중...'}
              readOnly
            />
          </EmailInput>
          <NameInput>
            <InputField
              label="닉네임"
              id="nickname-input"
              type="text"
              value={nickname || '닉네임 불러오는 중...'}
              onChange={(e) => setNickname(e.target.value)}
            />
          </NameInput>
        </InputBox>
      </AlignBox>

      <StorageBtn
        size="L"
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ width: '4rem' }}
        onClick={handleProfileUpdate}
      >
        저장
      </StorageBtn>
    </Div>
  );
};

const Div = styled.div`
  width: 34rem;
  height: 19.525rem;
  padding: 1.76rem 1.54rem;
  border-radius: 0.44rem;
  background-color: ${({ theme }) => theme.color.white};

  ${MEDIA_QUERIES.onMobile} {
    width: 15.62rem;
    height: 24.86rem;
  }
`;

const AlignBox = styled.div`
  display: flex;
  align-items: center;
  margin: 1.76rem 0 1.32rem 0;

  ${MEDIA_QUERIES.onMobile} {
    flex-direction: column;
    align-items: normal;
  }
`;

const ImgBox = styled.div`
  flex: 1;
`;

const Title = styled.span`
  font-size: 1.32rem;
  font-weight: 700;
`;

const ImgContent = styled.div``;

const InputBox = styled.div`
  flex: 2;
  margin-left: 0.88rem;

  ${MEDIA_QUERIES.onMobile} {
    margin-top: 1.32rem;
    margin-left: 0;
  }
`;

const EmailInput = styled.div`
  pointer-events: none;
  cursor: not-allowed;
`;

const NameInput = styled.div`
  margin-top: 1.1rem;
  color: black;
`;

const StorageBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.77rem;
  padding: 0.44rem 1.595rem 0.385rem 1.65rem;
  margin-left: 26.4rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.violet};

  ${MEDIA_QUERIES.onMobile} {
    margin-left: 8rem;
  }
`;

export default ProfileModify;
