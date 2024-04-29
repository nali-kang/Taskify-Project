import { useState } from 'react';
import * as S from './styled';
import Button from './Button';
import styled from 'styled-components';
import MEDIA_QUERIES from '../../../../constants/MEDIA_QUERIES';
import { hexColorEncode } from '../../../../common/util';

const ToDoModalComment = ({ id, comment, onEditComment, onDeleteComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.content || '');

  const handleEditComment = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    await onEditComment({ commentId: id, content: editedComment });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedComment(comment.content || '');
  };

  const handleDeleteComment = () => {
    onDeleteComment(id);
  };

  const firstChar =
    typeof comment.author.nickname === 'string'
      ? comment.author.nickname.slice(0, 1).toUpperCase()
      : '';

  return (
    <S.ModalComment color={hexColorEncode(comment.author.nickname)}>
      <S.ModalCommentImg>
        {comment.author.profileImageUrl ? (
          <ProfileImg src={comment.author.profileImageUrl} alt="프로필 이미지" />
        ) : (
          <div className="img_circle">{firstChar}</div>
        )}
      </S.ModalCommentImg>
      <S.ModalCommentContainer>
        <div>
          <h1>{comment.author.nickname}</h1>
          <p>{comment.createdAt}</p>
        </div>
        {isEditing ? (
          <S.ModalEditComment>
            <textarea value={editedComment} onChange={(e) => setEditedComment(e.target.value)} />
            <div>
              <Button onClick={handleSaveEdit}>저장</Button>
              <Button onClick={handleCancelEdit}>취소</Button>
            </div>
          </S.ModalEditComment>
        ) : (
          <div>
            <span>{comment.content}</span>
            <ul>
              <li onClick={handleEditComment}>수정</li>
              <li onClick={handleDeleteComment}>삭제</li>
            </ul>
          </div>
        )}
      </S.ModalCommentContainer>
    </S.ModalComment>
  );
};

export default ToDoModalComment;

const ProfileImg = styled.img`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 50%;
  ${MEDIA_QUERIES.onMobile} {
    width: 2.125rem;
    height: 2.125rem;
  }
`;
