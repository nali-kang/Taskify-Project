import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from './styles/GlobalStyles';
import './styles/fonts/font.css';
import { theme } from './styles/theme/theme';
import { ThemeProvider } from 'styled-components';
import BaseLayout from './layout/BaseLayout';
import MainLayout from './layout/MainLayout';
import DashboardEditPage from './pages/DashboardEditPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MydashboardPage from './pages/MydashboardPage';
import MyPage from './pages/MyPage';
import SignUpPage from './pages/SignupPage';
import ModalPage from './pages/ModalPage';

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route element={<BaseLayout />}>
              <Route path="mydashboard" element={<MydashboardPage />} />
              <Route path="dashboard/:dashboardid">
                <Route index element={<DashboardPage />} />
                <Route path="edit" element={<DashboardEditPage />} />
              </Route>
              <Route path="mypage" element={<MyPage />} />
            </Route>
            <Route path="modal" element={<ModalPage />} />
            {/* <Route path="/not-found" element={<NoPage />} />
      <Route path="*" element={<Navigate replace to="/not-found" />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
