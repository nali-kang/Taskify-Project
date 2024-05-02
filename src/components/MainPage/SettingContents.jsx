import styled from 'styled-components';
import setting1_image from '@images/main/resource/setting1_image.png';
import setting2_image from '@images/main/resource/setting2_image.png';
import setting3_image from '@images/main/resource/setting3_image.png';

const SettingContents = () => {
  return (
    <SettingSection>
      <h2 className="setting_title">생산성을 높이는 다양한 설정 ⚡</h2>
      <ImageContainer>
        <ImageCard>
          <div className="image_section">
            <img src={setting1_image} />
          </div>
          <div className="text_section">
            <h3>대시보드 설정</h3>
            <p>대시보드 사진과 이름을 변경할 수 있어요.</p>
          </div>
        </ImageCard>
        <ImageCard>
          <div className="image_section">
            <img src={setting2_image} />
          </div>
          <div className="text_section">
            <h3>초대</h3>
            <p>새로운 팀원을 초대할 수 있어요.</p>
          </div>
        </ImageCard>
        <ImageCard>
          <div className="image_section">
            <img src={setting3_image} />
          </div>
          <div className="text_section">
            <h3>구성원</h3>
            <p>구성원을 초대하고 내보낼 수 있어요.</p>
          </div>
        </ImageCard>
      </ImageContainer>
    </SettingSection>
  );
};

export default SettingContents;

const SettingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75rem;
  margin: 0 auto;
  gap: 2.25rem;
  padding-bottom: 10rem;

  @media (max-width: 743px) {
    width: 21.4375rem;
    align-items: center;
    padding-bottom: 7.53rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    width: 23.625rem;
    align-items: center;
  }
  .setting_title {
    color: ${({ theme }) => theme.color.white};
    font-family: Pretendard;
    font-size: 1.75rem;
    font-weight: 700;
    @media (max-width: 743px) {
      font-size: 1.375rem;
    }
  }
`;

const ImageContainer = styled.article`
  display: flex;
  gap: 2.06rem;
  @media (max-width: 743px) {
    flex-direction: column;
    gap: 2.53rem;
  }

  @media (min-width: 744px) and (max-width: 1220px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ImageCard = styled.div`
  width: 23.625rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 743px) {
    width: 21.4375rem;
    height: 21.73rem;
  }
  .image_section {
    height: 16.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background: ${({ theme }) => theme.color.black_4B};
    @media (max-width: 743px) {
      height: 14.7rem;
      img {
        transform: scale(0.9);
      }
    }
  }
  .text_section {
    height: 7.75rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    background: ${({ theme }) => theme.color.black_17};
    padding: 1.69rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 743px) {
      height: 7.03rem;
    }
    h3 {
      font-family: Pretendard;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: normal;
    }
    p {
      font-family: Pretendard;
      font-size: 1rem;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
