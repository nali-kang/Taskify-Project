import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/globalStyle';
import './styles/fonts/font.css';
import { theme } from './styles/theme/theme';
import { ThemeProvider } from 'styled-components';
import BaseLayout from './layout/BaseLayout';
import DashboardEditPage from './pages/DashboardEditPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MydashboardPage from './pages/MydashboardPage';
import MyPage from './pages/MyPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route element={<BaseLayout />}>
            <Route path="mydashboard" element={<MydashboardPage />} />
            <Route path="dashboard/:dashboardid">
              <Route index element={<DashboardPage />} />
              <Route path="edit" element={<DashboardEditPage />} />
            </Route>
            <Route path="mypage" element={<MyPage />} />
          </Route>
          {/* <Route path="/not-found" element={<NoPage />} />
      <Route path="*" element={<Navigate replace to="/not-found" />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
