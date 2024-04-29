import Button from './Button';
import * as S from './styled';

const ToDoModalOption = () => {
  // const onClickModify = () => {
  //   console.log(`modify button clicked`);
  // };

  // const onClickDelete = () => {
  //   console.log(`delete button clicked`);
  // };

  return (
    <S.ModalOption>
      <div>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
        {/* <Button onClick={onClickModify}>수정하기</Button>
        <Button onClick={onClickDelete}>삭제하기</Button> */}
      </div>
    </S.ModalOption>
  );
};

export default ToDoModalOption;
