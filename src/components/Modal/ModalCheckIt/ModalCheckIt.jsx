import * as S from './styled';

function ModalCheckIt({ confirmButton, text, cancelButton, onClickConfirm }) {
  return (
    <S.background>
      <S.container>
        <S.Text>{text}</S.Text>
        <S.buttonFlex>
          {cancelButton && <S.cancelButton>{cancelButton}</S.cancelButton>}
          <S.button onClick={onClickConfirm}>{confirmButton}</S.button>
        </S.buttonFlex>
      </S.container>
    </S.background>
  );
}
export default ModalCheckIt;
