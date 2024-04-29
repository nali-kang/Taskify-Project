import { useState } from 'react';
import * as S from './styled';
import Button from './Button';
import ToDoModalComment from './ToDoModalComment';
import ToDoModalOption from './ToDoModalOption';
import ToDoModalTag from './ToDoModalTag';
import ToDoModalUser from './ToDoModalUser';
import BaseModal from '../../../common/Modal';
import useBooleanState from '../../../../hooks/useBooleanState';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import instance from '../../../../lib/axios';

const ToDoModal = ({
  id,
  dashboardId,
  columnId,
  isOpen,
  closeModal,
  columnName,
  assignee,
  title,
  description,
  dueDate,
  tags,
  setCardList,
  imageUrl,
}) => {
  const queryClient = useQueryClient();

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

  // 댓글 조회
  const { data: commentsResponse } = useQuery({
    queryKey: ['comments', id],
    queryFn: async () => {
      const { data } = await instance.get('/comments', {
        params: {
          cardId: id,
          size: 10,
          page: 1,
        },
      });

      return data;
    },
    enabled: !!id,
  });

  // 댓글 작성
  const { mutateAsync: createComments } = useMutation({
    mutationFn: async (request) => {
      const { data } = await instance.post('/comments', request);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments', id],
      });
    },
  });

  // 댓글 수정
  const { mutateAsync: updateComment } = useMutation({
    mutationFn: async (request) => {
      const { commentId, content } = request;

      const { data } = await instance.put(`/comments/${commentId}`, {
        content,
      });

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments', id],
      });
    },
  });

  // 댓글 삭제
  const { mutateAsync: deleteComment } = useMutation({
    mutationFn: async (commentId) => {
      const { data } = await instance.delete(`/comments/${commentId}`);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments', id],
      });
    },
  });

  const [comment, setComment] = useState('');
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleClickDelete = async () => {
    await deleteCard();

    setCardList((prev) => prev.filter((card) => card.id !== id));

    closeTodoModalOption();
    closeModal();
  };

  const handleClickCreateComment = async () => {
    const request = {
      content: comment,
      cardId: id,
      columnId,
      dashboardId,
    };

    try {
      await createComments(request);
      setComment('');
    } catch (error) {
      alert(error);
    }
  };

  const handleClickUpdateComment = async (request) => {
    try {
      await updateComment(request);
    } catch (error) {
      alert(error);
    }
  };

  const handleClickDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId);
    } catch (error) {
      alert(error);
    }
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
                  <Button onClick={handleClickCreateComment}>입력</Button>
                </div>

                {/* TODO: 댓글 보여져야 하는 부분  */}
                <ul>
                  {commentsResponse?.comments?.map((commentItem, index) => (
                    <ToDoModalComment
                      key={index}
                      id={commentItem.id}
                      user={assignee}
                      comment={commentItem}
                      onEditComment={handleClickUpdateComment}
                      onDeleteComment={handleClickDeleteComment}
                      // onDeleteComment={() => handleDeleteComment(index)}
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

// const [comments, setComments] = useState([]);
// const [error, setError] = useState(null); // 여기에 error 상태 추가

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

// const handleEditComment = (id, editedComment) => {
//   setComments((prevComments) => {
//     return prevComments.map((comment, i) =>
//       i === id ? { ...comment, text: editedComment } : comment,
//     );
//   });
// };

// const handleDeleteComment = (id) => {
//   const updatedComments = [...comments];
//   updatedComments.splice(id, 1);
//   setComments(updatedComments);
// };
