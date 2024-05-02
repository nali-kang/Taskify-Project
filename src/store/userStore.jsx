import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (userInfo) => set({ user: userInfo }),
    }),
    {
      name: 'user', // localStorage에 저장될 때 사용될 키
      storage: createJSONStorage(() => localStorage), // 사용할 스토리지 지정
    },
  ),
);

export default useUserStore;
