import { useState } from 'react';
import * as S from './styled';
import Button from './Button';
import ToDoModalComment from './ToDoModalComment';
import ToDoModalOption from './ToDoModalOption';
import ToDoModalTag from './ToDoModalTag';
import ToDoModalUser from './ToDoModalUser';
import BaseModal from '../../../common/Modal';
import useBooleanState from '../../../../hooks/useBooleanState';
import { useMutation } from '@tanstack/react-query';
import instance from '../../../../lib/axios';

const ToDoModal = ({
  id,
  isOpen,
  closeModal,
  columnName,
  imageUrl,
  assignee,
  title,
  description,
  dueDate,
  tags,
  setCardList,
  // img,
}) => {
  // FIXME: startEdit 수정
  const [isEdit, startEdit] = useBooleanState();

  // eslint-disable-next-line no-unused-vars
  const [isOpenTodoModalOption, _, closeTodoModalOption, toggleTodoModalOption] = useBooleanState();

  const { mutateAsync: deleteCard } = useMutation({
    mutationFn: () => {
      const { data } = instance.delete(`/cards/${id}`);

      return data;
    },
  });

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  // const [error, setError] = useState(null); // 여기에 error 상태 추가

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // const handleCommentSubmit = () => {
  //   try {
  //     const currentTime = new Date().toLocaleString();
  //     const newComment = {
  //       text: comment,
  //       time: currentTime,
  //     };

  //     setComments((prevComments) => [
  //       ...prevComments,
  //       newComment,
  //     ]);
  //     setError(null); // 커밋오류로 여기에 error 상태초기화 추가
  //   } catch (err) {
  //     console.log("댓글 추가 중 오류 발생");
  //   }
  //   // 실제 서버로 댓글을 전송하는 로직 추가해야됨!
  //   setComment("");
  // };

  const handleEditComment = (id, editedComment) => {
    setComments((prevComments) => {
      return prevComments.map((comment, i) =>
        i === id ? { ...comment, text: editedComment } : comment,
      );
    });
  };

  const handleDeleteComment = (id) => {
    const updatedComments = [...comments];
    updatedComments.splice(id, 1);
    setComments(updatedComments);
  };

  const handleClickDelete = async () => {
    await deleteCard();

    setCardList((prev) => prev.filter((card) => card.id !== id));

    closeTodoModalOption();
    closeModal();
  };

  return (
    // 커밋오류때문에 추가한 부분
    <>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

      {isEdit ? (
        <BaseModal isOpen>
          <div>수정하는 모달</div>
        </BaseModal>
      ) : (
        <BaseModal isOpen={isOpen}>
          <S.ModalContainer>
            <S.ModalHeader>
              <h1>{title}</h1>
              <div className="button_area">
                <button className="modal_button" onClick={toggleTodoModalOption}>
                  <img src="/src/assets/icon/3dot.svg" />
                </button>
                <button className="modal_button" onClick={closeModal}>
                  <img src="/src/assets/icon/closeX.svg" />
                </button>
                {isOpenTodoModalOption && (
                  <ToDoModalOption onClickModify={startEdit} onClickDelete={handleClickDelete} />
                )}
              </div>
            </S.ModalHeader>
            <ToDoModalUser user={assignee} deadline={dueDate} />
            <S.ModalContent>
              <S.ModalTag>
                <div>
                  <h1></h1>
                  <h2>{columnName}</h2>
                </div>
                <p>|</p>
                <ToDoModalTag tags={tags} />
              </S.ModalTag>
              <S.ModalWords>{description}</S.ModalWords>
              {imageUrl && (
                <S.ModalContentImage>
                  <img src={imageUrl} alt="img" />
                </S.ModalContentImage>
              )}

              <S.ModalCommentInput>
                <h3>댓글</h3>
                <div>
                  <textarea
                    placeholder="댓글 작성하기"
                    value={comment}
                    onChange={handleCommentChange}
                  />
                  <Button>입력</Button>
                  {/* <Button onClick={handleCommentSubmit}>입력</Button> */}
                </div>
                <ul>
                  {comments.map((commentItem, index) => (
                    <ToDoModalComment
                      key={index}
                      id={index}
                      user={assignee}
                      comment={commentItem}
                      onEditComment={handleEditComment}
                      onDeleteComment={() => handleDeleteComment(index)}
                    />
                  ))}
                </ul>
              </S.ModalCommentInput>
            </S.ModalContent>
          </S.ModalContainer>
        </BaseModal>
      )}
    </>
  );
};

export default ToDoModal;
