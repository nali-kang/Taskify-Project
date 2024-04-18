// 접근성과 관련된 룰이라서 임의로 disabled 처리했습니다.
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */

// 컴포넌트에 props를 넘길때 스프레드 연산자를 사용하는 걸 금지하는 룰인데 꼭 지킬 필요는 없기 때문에 disabled 처리했습니다.
/* eslint-disable react/jsx-props-no-spreading */

import { useState } from 'react';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function FormWithReactHookForm() {
  const {
    formState: { errors },
    setError,
    handleSubmit,
    register,
  } = useForm({
    mode: 'onBlur',
  });

  const [passwordType, setPasswordType] = useState('text');

  const handleClickTogglePasswordType = () => {
    setPasswordType((prev) => (prev === 'text' ? 'password' : 'text'));
  };

  const onSubmit = async (data) => {
    // eslint-disable-next-line no-console
    console.log('form의 데이터들은 data 매개변수에 담깁니다.', data);

    try {
      // 로그인 api라고 가정
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: '성공',
            accessToken: 'token',
          });
        }, 1000);
      });

      if (result.status === '성공') {
        localStorage.setItem('access-token', result.accessToken);
      }
    } catch (error) {
      setError('email', {
        message: '이메일을 확인해주세요. (로그인 실패시 에러메시지)',
      });
      setError('password', {
        message: '비밀번호를 확인해주세요. (로그인 실패시 에러메시지)',
      });
    }
  };

  return (
    <div style={{ width: '430px', margin: '0 auto', paddingTop: '238px' }}>
      <div>
        <div>Linkbrary 아이콘</div>
      </div>

      {/* form의 onSubmit 이벤트, button의 submit 타입을 활용했기 때문에 엔터키 + 버튼 클릭으로 폼이 제출됩니다. */}
      <form style={{ marginTop: '32px' }} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email" style={{ textAlign: 'left' }}>
            이메일
          </label>
          <input
            type="text"
            id="email"
            style={{ border: '1px solid black', height: '32px', padding: '16px' }}
            placeholder="이메일을 입력해 주세요."
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: EMAIL_REGEX,
                message: '올바른 이메일 주소가 아닙니다.',
              },
            })}
          />
          {errors.email?.message && <div style={{ color: 'red' }}>{errors.email?.message}</div>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '32px' }}>
          <label htmlFor="password" style={{ textAlign: 'left' }}>
            비밀번호
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={passwordType}
              id="password"
              style={{ border: '1px solid black', height: '32px', padding: '16px', width: '430px' }}
              placeholder="비밀번호를 입력해 주세요."
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
              })}
            />
            <div
              onClick={handleClickTogglePasswordType}
              style={{
                position: 'absolute',
                top: '50%',
                right: '16px',
                transform: 'translateY(-50%)',
              }}
            >
              {passwordType === 'text' ? '사선이 없는 눈' : '사선 있는 눈'}
            </div>
          </div>
          {errors.password?.message && (
            <div style={{ color: 'red' }}>{errors.password?.message}</div>
          )}
        </div>

        <button
          type="submit"
          style={{
            textAlign: 'center',
            border: '1px solid black',
            padding: '8px',
            marginTop: '16px',
            backgroundColor: 'black',
            color: 'white',
            width: '100%',
          }}
        >
          로그인
        </button>
      </form>

      <div className="flex justify-between mt-4">
        <div>소셜 로그인</div>
        <div className="flex gap-2">
          <a href="https://www.google.com" target="_blank" rel="noreferrer noopener">
            구글 아이콘
          </a>
          <a href="https://www.kakaocorp.com/page" target="_blank" rel="noreferrer noopener">
            카카오톡 아이콘
          </a>
        </div>
      </div>
    </div>
  );
}
