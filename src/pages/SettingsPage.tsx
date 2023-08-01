import { FC, useState } from 'react';
import ContainerContent from '../components/ContainerContent';
import { Link } from 'react-router-dom';
import { Descriptions, Switch } from 'antd';
import { selectorThemeSlice, setThemeDark, setThemeLight } from '../store/reducers/themeSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/useAppDispatch';

const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>
  },
  {
    title: 'Settings'
  }
];

const SettingsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { isThemeLight } = useSelector(selectorThemeSlice);
  const [themeSwitchValue, setThemeSwitchValue] = useState(isThemeLight);

  const handleThemeSwitch = (value: boolean) => {
    if (value) {
      setThemeSwitchValue(true);
      dispatch(setThemeLight());
    } else {
      setThemeSwitchValue(false);
      dispatch(setThemeDark());
    }
  };

  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <Descriptions title="User settings" bordered>
        <Descriptions.Item label="Theme mode">
          <Switch
            onChange={handleThemeSwitch}
            checkedChildren="Light theme ☀️"
            unCheckedChildren="Dark theme 🌙"
            defaultChecked={themeSwitchValue}
          />
        </Descriptions.Item>
      </Descriptions>
    </ContainerContent>
  );
};

export default SettingsPage;
