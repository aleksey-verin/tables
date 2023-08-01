import { FC } from 'react';
import { Link } from 'react-router-dom';
import ContainerContent from '../components/ContainerContent';
import TableMain from '../components/mainPage/TableMain';
import TableTitle from '../components/mainPage/TableTitle';

const breadcrumbItems = [
  {
    title: <Link to="/">Home</Link>
  },
  {
    title: 'Tables'
  }
];

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  return (
    <ContainerContent breadcrumbItems={breadcrumbItems}>
      <TableTitle />
      <TableMain />
    </ContainerContent>
  );
};

export default MainPage;
