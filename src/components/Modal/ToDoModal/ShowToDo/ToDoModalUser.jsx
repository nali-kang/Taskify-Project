import UserName from '../../../common/UserName';
import * as S from './styled';

const ToDoModalUser = ({ user, deadline }) => {
  return (
    <S.ToDoModalUser>
      <div>
        <h3>담당자</h3>
        <UserName nickname={user?.nickname} img={user?.profileImageUrl} />
      </div>
      <div>
        <h3>마감일</h3>
        <p>{deadline}</p>
      </div>
    </S.ToDoModalUser>
  );
};

export default ToDoModalUser;
