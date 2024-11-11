import { type RouteObject } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';  



const Analytics = () => <div>Аналитика</div>;
const Fakecheker = () => <div>Фейкчекер</div>;
const PersonalTapes = () => <div>Персональные ленты</div>;
const Statistics = () => <div>Статистика</div>;
const TechnicalIndicators = () => <div>Тех. показатели</div>;
const Anomalies = () => <div>Аномалии</div>;
const PersonsList = () => <div>Список персон</div>;
const Reports = () => <div>Отчеты</div>;
const Settings = () => <div>Настройки</div>;
const NotificationSettings = () => <div>Настройки уведомлений</div>;
const Transcriptions = () => <div>Транскрибации</div>;
const FolderManagement = () => <div>Управление папками</div>;
const Sources = () => <div>Источники</div>;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <div style={{ display: 'flex' }}>
    <Sidebar /> 
  </div>,
    children: [
      { path: 'fakecheker', element: <Fakecheker /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'personal-tapes', element: <PersonalTapes /> },
      { path: 'statistics', element: <Statistics /> },
      { path: 'technical-indicators', element: <TechnicalIndicators /> },
      { path: 'anomalies', element: <Anomalies /> },
      { path: 'persons', element: <PersonsList /> },
      { path: 'reports', element: <Reports /> },
      { path: 'settings', element: <Settings /> },
      { path: 'notification-settings', element: <NotificationSettings /> },
      { path: 'transcriptions', element: <Transcriptions /> },
      { path: 'folder-management', element: <FolderManagement /> },
      { path: 'sources', element: <Sources /> },
    ],
  },
];
