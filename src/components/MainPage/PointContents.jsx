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
  background: ${({ theme }) => theme.color.black_17};
  margin: 0 auto 5.62rem;

  @media (max-width: 743px) {
    width: auto;
    margin: 0 1rem 3.69rem;
  }
  @media (min-width: 744px) and (max-width: 1220px) {
    width: 41.5rem;
    height: 60.75rem;
  }

  .point_article {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas:
      'image point'
      'image text';
    grid-template-columns: 1fr 1fr;

    @media (max-width: 743px) {
      grid-template-areas:
        'point'
        'text'
        'image';
      grid-template-columns: 1fr;
    }
    @media (min-width: 744px) and (max-width: 1220px) {
      grid-template-areas:
        'point'
        'text'
        'image';
      grid-template-columns: 1fr;
    }
    .point_title {
      grid-area: point;
      padding-left: 3.75rem;
      align-self: center;
      color: ${({ theme }) => theme.color.gray_9F};
      font-size: 1.375rem;
      font-weight: 500;
      @media (max-width: 743px) {
        font-size: 1.125rem;
        padding: 0;
        justify-self: center;
      }
    }
    .point_contents {
      white-space: pre-wrap;
      grid-area: text;
      padding-left: 3.75rem;
      color: ${({ theme }) => theme.color.white};
      font-family: Pretendard;
      font-size: 3rem;
      font-weight: 700;
      line-height: 4rem; /* 133.333% */
      @media (max-width: 743px) {
        font-size: 2.25rem;
        line-height: 3.125rem; /* 138.889% */
        padding: 0;
        justify-self: center;
        text-align: center;
      }
      @media (min-width: 744px) and (max-width: 1220px) {
        align-self: center;
      }
    }
    .point_image {
      grid-area: image;
      align-self: end;
      justify-self: center;
      @media (max-width: 743px) {
        width: 13.57069rem;
        height: 15.625rem;
      }
    }
    .point_image--first {
      justify-self: end;
      @media (max-width: 743px) {
        width: 18.507rem;
        height: 15.5rem;
      }
      @media (min-width: 744px) and (max-width: 1220px) {
        align-self: end;
      }
    }
  }
  .point_article--first {
    grid-template-areas:
      'point image'
      'text image';

    @media (max-width: 743px) {
      grid-template-areas:
        'point'
        'text'
        'image';
    }
    @media (min-width: 744px) and (max-width: 1220px) {
      grid-template-areas:
        'point'
        'text'
        'image';
    }
  }
`;
