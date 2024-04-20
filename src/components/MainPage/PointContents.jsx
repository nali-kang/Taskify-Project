import { useMemo } from 'react';
import styled from 'styled-components';

const PointContents = ({ title, text, src, index }) => {
  const articleClassNames = useMemo(
    () => 'point_article' + (index === 1 ? ' point_article--first' : ''),
    [index],
  );
  const imageClassNames = useMemo(
    () => 'point_image' + (index === 1 ? ' point_image--first' : ''),
    [index],
  );
  return (
    <PointLayout>
      <article className={articleClassNames}>
        <p className="point_title">{title}</p>
        <strong className="point_contents">{text}</strong>
        <img className={imageClassNames} src={src} />
      </article>
    </PointLayout>
  );
};

export default PointContents;

const PointLayout = styled.section`
  width: 75rem;
  height: 37.5rem;
  border-radius: 0.5rem;
  background: var(--black-black_171717, #171717);
  margin: 0 auto 5.62rem;
  .point_article {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas:
      'image point'
      'image text';
    grid-template-columns: 1fr 1fr;
    .point_title {
      grid-area: point;
      padding-left: 3.75rem;
      align-self: center;
      color: var(--gray-gray_9FA6B2, #9fa6b2);
      font-size: 1.375rem;
      font-weight: 500;
    }
    .point_contents {
      white-space: pre-wrap;
      grid-area: text;
      padding-left: 3.75rem;
      color: var(--white-white_FFFFFF, #fff);
      font-family: Pretendard;
      font-size: 3rem;
      font-weight: 700;
      line-height: 4rem; /* 133.333% */
    }
    .point_image {
      grid-area: image;
      align-self: end;
      justify-self: center;
    }
  }
  .point_article--first {
    grid-template-areas:
      'point image'
      'text image';
  }
  .point_image--first {
    justify-self: end;
  }
`;
