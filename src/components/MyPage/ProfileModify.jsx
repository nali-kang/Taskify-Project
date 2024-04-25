import styled from 'styled-components';
import ImgUpload from './ImgUpload';
import InputField from './Input';
import Button from '../common/Button';
import { BUTTON_TYPE } from '../../constants/BUTTON_TYPE';
import MEDIA_QUERIES from '../../constants/MEDIA_QUERIES';

const ProfileModify = ({ name }) => {
  return (
    <Div>
      <Title>프로필</Title>
      <AlignBox>
        <ImgBox>
          <ImgContent>
            <ImgUpload edit={false} small={false} />
          </ImgContent>
        </ImgBox>

        <InputBox>
          <EmailInput>
            <InputField
              label="이메일"
              id="input"
              type="email"
              placeholder="이메일을 입력해주세요"
            />
          </EmailInput>
          <NameInput>
            <InputField label="닉네임" id="input" type="text" placeholder={name} />
          </NameInput>
        </InputBox>
      </AlignBox>

      <StorageBtn size="L" styleType={BUTTON_TYPE.PRIMARY} style={{ width: '8.4rem' }}>
        저장
      </StorageBtn>
    </Div>
  );
};

const Div = styled.div`
  width: 62rem;
  height: 35.5rem;
  padding: 3.2rem 2.8rem 2.8rem 2.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.white};

  ${MEDIA_QUERIES.onMobile} {
    width: 28.4rem;
    height: 45.2rem;
  }
`;

const AlignBox = styled.div`
  display: flex;
  align-items: center;
  margin: 3.2rem 0 2.4rem 0;

  ${MEDIA_QUERIES.onMobile} {
    flex-direction: column;
    align-items: normal;
  }
`;

const ImgBox = styled.div`
  flex: 1;
`;

const Title = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
`;

const ImgContent = styled.div``;

const InputBox = styled.div`
  flex: 2;
  margin-left: 1.6rem;

  ${MEDIA_QUERIES.onMobile} {
    margin-top: 2.4rem;
    margin-left: 0;
  }
`;

const EmailInput = styled.div`
  pointer-events: none;
  cursor: not-allowed;
`;

const NameInput = styled.div`
  margin-top: 2rem;
  color: black;
`;

const StorageBtn = styled(Button)`
  font-size: 1.4rem;
  padding: 0.8rem 2.9rem 0.7rem 3rem;
  margin-left: 48rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.violet};

  ${MEDIA_QUERIES.onMobile} {
    margin-left: 14.5rem;
  }
`;

export default ProfileModify;
