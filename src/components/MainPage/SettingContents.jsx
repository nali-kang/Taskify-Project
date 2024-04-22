import styled from 'styled-components';

const SettingContents = () => {
  return (
    <SettingSection>
      <h2 className="setting_title">생산성을 높이는 다양한 설정 ⚡</h2>
      <ImageContainer>
        <ImageCard>
          <div className="image_section">
            <img src="/src/assets/images/main/resource/setting1_image.png" />
          </div>
          <div className="text_section">
            <h3>대시보드 설정</h3>
            <p>대시보드 사진과 이름을 변경할 수 있어요.</p>
          </div>
        </ImageCard>
        <ImageCard>
          <div className="image_section">
            <img src="/src/assets/images/main/resource/setting2_image.png" />
          </div>
          <div className="text_section">
            <h3>초대</h3>
            <p>새로운 팀원을 초대할 수 있어요.</p>
          </div>
        </ImageCard>
        <ImageCard>
          <div className="image_section">
            <img src="/src/assets/images/main/resource/setting3_image.png" />
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
  .setting_title {
    color: ${({ theme }) => theme.color.white};
    font-family: Pretendard;
    font-size: 1.75rem;
    font-weight: 700;
  }
`;

const ImageContainer = styled.article`
  display: flex;
  gap: 2.06rem;
`;

const ImageCard = styled.div`
  width: 23.625rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  .image_section {
    height: 16.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background: ${({ theme }) => theme.color.black_4B};
  }
  .text_section {
    height: 7.75rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    background: ${({ theme }) => theme.color.black_17};
    padding: 2.06rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
