import { MenuProps, Menu } from 'antd';
import { MailOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { extractPath } from '../utils/helpers';

const items: MenuProps['items'] = [
  {
    label: <NavLink to={ROUTES.HOME_ROUTE}>Home</NavLink>,
    key: ROUTES.HOME_ROUTE,
    icon: <HomeOutlined />
  },
  {
    label: <NavLink to={ROUTES.TABLES_ROUTE}>Tables</NavLink>,
    key: ROUTES.TABLES_ROUTE,
    icon: <MailOutlined />
  },
  {
    label: <NavLink to={ROUTES.SETTINGS_ROUTE}>Settings</NavLink>,
    key: ROUTES.SETTINGS_ROUTE,
    icon: <SettingOutlined />
  }
];

const ContainerNavbar: FC = () => {
  const { pathname } = useLocation();
  const currentPath = extractPath(pathname);

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={items}
        selectedKeys={[currentPath]}
        style={{ width: '100%' }}
      />
    </Header>
  );
};

export default ContainerNavbar;
