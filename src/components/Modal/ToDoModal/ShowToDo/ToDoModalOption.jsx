import Button from './Button';
import * as S from './styled';

const ToDoModalOption = ({ onClickModify, onClickDelete }) => {
  return (
    <S.ModalOption>
      <div>
        <Button onClick={onClickModify}>수정하기</Button>
        <Button onClick={onClickDelete}>삭제하기</Button>
      </div>
    </S.ModalOption>
  );
};

export default ToDoModalOption;
