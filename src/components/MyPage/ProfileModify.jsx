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

      <StorageBtn size="L" styleType={BUTTON_TYPE.PRIMARY} style={{ width: '4rem' }}>
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
