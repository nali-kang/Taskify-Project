import styled from 'styled-components';
import MEDIA_QUERIES from '../../../../constants/MEDIA_QUERIES';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color.purple};
  background-color: ${({ theme }) => theme.color.white};
  transition: 0.3s;
`;

export const ModalBG = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  width: 45.625rem;
  max-height: 47.6875rem;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.gray_D9};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  color: #000;
  @media all and (max-width: 1199px) {
    width: 68rem;
  }

  @media all and (max-width: 767px) {
    width: 36.7rem;
    max-height: 65rem;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.color.violet};
      border-radius: 6px;
    }
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.75rem 1.5rem;

  h1 {
    color: ${({ theme }) => theme.color.black_33};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }

  .button_area {
    position: relative;
    display: flex;
    gap: 1.5rem;
    .modal_button {
      width: 2rem;
      height: 2rem;
      padding: 0;
      background: transparent;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
      &:focus,
      &:focus-visible,
      &:hover {
        border: none;
        outline: none;
      }
    }
  }
`;

export const ModalOption = styled.div`
  width: 93px;
  height: 82px;
  border: 1px solid ${({ theme }) => theme.color.gray_D9};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  left: -70px;
  bottom: -82px;
  z-index: 2;

  & button {
    width: 81px;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.black};
    border: none;
    border-radius: 4px;
    padding: 10px 12px;
    margin: 6px;

    &:hover {
      font-weight: 500;
      color: ${({ theme }) => theme.color.violet};
      background-color: ${({ theme }) => theme.color.violet_8p};
    }
  }
`;

export const ToDoImg = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  border-radius: 99px;
  overflow: hidden;

  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const ToDoModalUser = styled.div`
  width: 12.5rem;
  height: 9.6875rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray_D9};
  border-radius: 0.5rem;

  position: absolute;
  top: 5.31rem;
  right: 1.75rem;

  @media all and (max-width: 767px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    position: static;
  }

  & > div {
    display: flex;
    flex-direction: column;
  }

  & h3 {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.25rem; /* 166.667% */
  }

  & p {
    font-size: 14px;
  }

  & > div > div {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    border-radius: 99px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  max-height: 663px;
  padding: 0 28px;
  position: relative;
  @media all and (max-width: 767px) {
    margin-top: 2rem;
  }
`;

export const ModalTag = styled.div`
  width: 450px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
    height: 22px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.violet};
    background-color: ${({ theme }) => theme.color.violet_8p};
    padding: 0 10px;
    border-radius: 10px;
  }

  & div h1 {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.violet};
    margin-right: 5px;
  }

  & div h2 {
    font-size: 12px;
    white-space: nowrap;
  }

  & ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    @media all and (max-width: 767px) {
      width: 19rem;
    }
  }

  & p {
    font-size: 14px;
    height: 22px;
    padding: 0 20px;
    color: ${({ theme }) => theme.color.gray_D9};
    @media all and (max-width: 767px) {
      padding: 0 1rem;
    }
  }

  & ul li {
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    border-radius: 4px;
    padding: 0 10px;
    background-color: #f9eee3;
    color: #d58d49;
  }

  & ul li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.color.black};
  }
`;

export const ModalWords = styled.p`
  width: 450px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 0;
  word-wrap: break-word;
  @media all and (max-width: 1199px) {
    width: 41rem;
  }
  @media all and (max-width: 767px) {
    width: 28.7rem;
  }
`;

export const ModalContentImage = styled.div`
  width: 450px;
  height: 200px;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  & img {
    width: 100%;
  }
  @media all and (max-width: 1199px) {
    width: 41rem;
    height: 24.5rem;
  }
  @media all and (max-width: 767px) {
    width: 28.7rem;
    height: 16.7rem;
  }
`;

export const ModalCommentInput = styled.div`
  width: 450px;
  margin-top: 24px;

  @media all and (max-width: 1199px) {
    width: 41rem;
  }
  @media all and (max-width: 767px) {
    width: 28.7rem;
  }

  & h3 {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black};
    margin-left: 4px;
    margin-bottom: 10px;
  }

  & div {
    position: relative;
  }

  & textarea {
    width: 100%;
    height: 110px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.color.gray_D9};
    border-radius: 6px;
    font-size: 14px;
    resize: none;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.color.violet};
    }

    &::placeholder {
      line-height: 1.5;
    }
  }

  & > div > button {
    position: absolute;
    bottom: 12px;
    right: 12px;
    border: 1px solid ${({ theme }) => theme.color.violet};
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    width: 90px;
    height: 32px;
    padding: 9px 31px;

    &:hover {
      background-color: ${({ theme }) => theme.color.violet};
      color: ${({ theme }) => theme.color.white};
    }
  }

  & > ul {
    width: 100%;
    max-height: 120px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    @media all and (max-width: 1199px) {
      max-height: 105px;
    }
    @media all and (max-width: 767px) {
      max-height: 105px;
    }
  }
`;

export const ModalComment = styled.li`
  width: 400px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;

  .img_circle {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 100%;
    background-color: ${(props) => props.color};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 600;

    ${MEDIA_QUERIES.onMobile} {
      width: 2.125rem;
      height: 2.125rem;
      font-size: 0.875rem;
    }
  }

  .nickname_text {
    color: ${({ theme }) => theme.color.black_33};
    font-size: 1rem;
    font-weight: 400;
    ${MEDIA_QUERIES.onMobile} {
      display: ${(props) => (props.nameHidden ? 'none' : 'block')};
      font-size: 0.875rem;
    }
  }
`;

export const ModalCommentImg = styled.div`
  margin-top: 4px;
  margin-right: 10px;
  position: relative;

  & > div {
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    font-size: 1.6rem;
  }
`;

export const ModalCommentContainer = styled.div`
  width: 350px;
  height: 100%;

  & div:first-child {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 10px;

    & h1 {
      margin: 0;
      margin-right: 6px;
      font-size: 14px;
    }

    & p {
      color: ${({ theme }) => theme.color.gray_9F};
    }
  }

  & span {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
    display: block;
  }

  & ul {
    display: flex;
    gap: 12px;

    & li {
      color: ${({ theme }) => theme.color.gray_9F};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const ModalEditComment = styled.div`
  & textarea {
    width: 350px;
    height: 60px;
    padding: 6px;
    margin-top: 5px;
    resize: none;
    font-size: 12px;
  }

  & div {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }

  & div button {
    padding: 3px 6px;
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 5px;
    color: ${({ theme }) => theme.color.black};

    &:hover {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
