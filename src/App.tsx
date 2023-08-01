import { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorThemeSlice } from './store/reducers/themeSlice';
import { ROUTES } from './routes/routes';
import SettingsPage from './pages/SettingsPage';
import ContainerNavbar from './components/ContainerNavbar';
import ContainerFooter from './components/ContainerFooter';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import { toast } from 'react-hot-toast';
import { ConfigProvider, Layout, theme } from 'antd';
import './App.css';

function App() {
  const { isThemeLight } = useSelector(selectorThemeSlice);

  const userTheme = {
    algorithm: isThemeLight ? theme.defaultAlgorithm : theme.darkAlgorithm
  };

  useEffect(() => {
    toast.success('Welcome!');
  }, []);

  return (
    <HashRouter>
      <ConfigProvider theme={userTheme}>
        <Layout style={{ minHeight: '100%' }}>
          <ContainerNavbar />
          <Routes>
            <Route element={<HomePage />} path={ROUTES.HOME_ROUTE} />
            <Route element={<MainPage />} path={ROUTES.TABLES_ROUTE} />
            <Route element={<SettingsPage />} path={ROUTES.SETTINGS_ROUTE} />
            <Route path="*" element={<Navigate replace to={ROUTES.HOME_ROUTE} />} />
          </Routes>
          <ContainerFooter />
        </Layout>
      </ConfigProvider>
    </HashRouter>
  );
}

export default App;
