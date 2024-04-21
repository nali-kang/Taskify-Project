/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const todoApi = {
  addTodo: async (todo) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: todo.title,
        body: todo.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('todo를 추가할 때 에러가 발생했습니다.');
    }

    const result = await response.json();

    return result;
  },
};

export default function MutationWithReactQuery() {
  const { register, handleSubmit } = useForm();

  const { mutateAsync: addTodo } = useMutation({
    mutationFn: todoApi.addTodo,
  });
  const queryClient = useQueryClient();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await addTodo(data);

      // 실제로는 api를 호출한 후에 쿼리를 무효화해서 서버로부터 최신 데이터를 불러올 수 있도록 해야합니다!
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">제목</label>
          <input id="title" type="text" {...register('title')} />
        </div>
        <div>
          <label htmlFor="body">내용</label>
          <input id="body" type="text" {...register('body')} />
        </div>
        <button style={{ border: '1px solid black', marginTop: '32px' }} type="submit">
          투두 추가하기!
        </button>
      </form>
    </div>
  );
}
