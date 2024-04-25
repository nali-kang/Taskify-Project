import * as S from './styled';

function ModalCheckIt({ submitButton, text, cancelButton, wrong }) {
  return (
    <>
      <S.background>
        <S.container height={'25rem'} width={'54rem'}>
          <S.description>{text}</S.description>
          <S.buttonFlex>
            {cancelButton && <S.cancelButton>{cancelButton}</S.cancelButton>}
            <S.button onClick={wrong}>{submitButton}</S.button>
          </S.buttonFlex>
        </S.container>
      </S.background>
    </>
  );
}
export default ModalCheckIt;
