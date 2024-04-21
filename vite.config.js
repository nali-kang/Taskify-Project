import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    // 프로덕션 빌드된 파일들이 생성될 디렉토리를 지정
    outDir: 'dist',
    // 코드를 최적화(압축)하여 용량을 줄아고 성능을 향상
    minify: true,
    // 소스 맵(개발 중 디버깅)비활성화
    sourcemap: false,
    // CSS 압축 설정
    cssCodeSplit: true,
    // 코드를 작은 조각으로 나누어 로딩 성능 최적화(2,000 바이트 초과 시 경고)
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/Pages' },
      { find: '@layout', replacement: '/src/layout' },
      { find: '@images', replacement: '/src/assets/images' },
      { find: '@icon', replacement: '/src/assets/icon' },
      { find: '@constants', replacement: '/src/constants' },
    ],
  },
});
