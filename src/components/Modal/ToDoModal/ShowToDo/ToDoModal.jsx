import { useEffect, useState } from 'react';
import * as S from './styled';
import Button from './Button';
import ToDoModalComment from './ToDoModalComment';
import ToDoModalOption from './ToDoModalOption';
import ToDoModalTag from './ToDoModalTag';
import ToDoModalUser from './ToDoModalUser';

const ToDoModal = ({
  columnName,
  user,
  title,
  content,
  deadline,
  tags,
  // img,
}) => {
  const [column, setColumn] = useState('todo');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [renderedOption, setRenderedOption] = useState(null);
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

  const onClickModalOption = () => {
    if (renderedOption) {
      setRenderedOption(null);
    } else {
      setRenderedOption(<ToDoModalOption />);
    }
  };

  const onClickModalClose = () => {
    return;
  };

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

  useEffect(() => {
    setColumn(columnName);
  }, [columnName]);

  return (
    // 커밋오류때문에 추가한 부분
    <>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

      <S.ModalBG>
        <S.ModalContainer>
          <S.ModalHeader>
            <h1>{title}</h1>
            <div>
              <button onClick={onClickModalOption}>
                <img src="src/assets/icon/3dot.svg" />
              </button>
              <button onClick={onClickModalClose}>
                <img src="src/assets/icon/closeX.svg" />
              </button>
              {renderedOption}
            </div>
          </S.ModalHeader>
          <ToDoModalUser user={user} deadline={deadline} />
          <S.ModalContent>
            <S.ModalTag>
              <div>
                <h1></h1>
                <h2>{column}</h2>
              </div>
              <p>|</p>
              <ToDoModalTag tags={tags} />
            </S.ModalTag>
            <S.ModalWords>{content}</S.ModalWords>
            <S.ModalContentImage>
              {/* <img src="src/assets/images/main/desktop.png" alt="img" /> */}
            </S.ModalContentImage>
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
                    user={user}
                    comment={commentItem}
                    onEditComment={handleEditComment}
                    onDeleteComment={() => handleDeleteComment(index)}
                  />
                ))}
              </ul>
            </S.ModalCommentInput>
          </S.ModalContent>
        </S.ModalContainer>
      </S.ModalBG>
    </>
  );
};

export default ToDoModal;
