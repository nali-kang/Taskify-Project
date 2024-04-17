import { useQuery } from '@tanstack/react-query';

const getTodo = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  if (!response.ok) {
    throw new Error('Todo 데이터를 불러올때 에러가 발생했습니다.');
  }

  const todo = await response.json();

  return todo;
};

export default function DataFetchingWithReactQuery() {
  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['todos', 1],
    queryFn: () => getTodo(1),
  });

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (error) {
    return <div>에러가 발생했어요.</div>;
  }

  return (
    <div>
      <h2>Todo 정보</h2>
      <div>제목: {todo.title}</div>
      <div>완료 여부: {todo.completed ? '완료' : '미완료'}</div>
    </div>
  );
}
