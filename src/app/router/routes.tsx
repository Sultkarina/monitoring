import { type RouteObject } from 'react-router-dom';
import AnalyticsPage from '../../pages/AnalyticsPage';
import PersonalTapesPage from '../../pages/PersonalTapesPage';
import FakechekerPage from '../../pages/FakechekerPage';
import StatisticsPage from '../../pages/StatisticsPage';
import TechnicalIndicatorsPage from '../../pages/TechnicalIndicatorsPage';
import AnomaliesPage from '../../pages/AnomaliesPage';
import PersonsListPage from '../../pages/PersonsListPage';
import ReportsPage from '../../pages/ReportsPage';
import SettingsPage from '../../pages/SettingsPage';
import NotificationSettingsPage from '../../pages/NotificationSettingsPage';
import TranscriptionsPage from '../../pages/TranscriptionsPage';
import FolderManagementPage from '../../pages/FolderManagementPage';
import SourcesPage from '../../pages/SourcesPage';
import RootLayout from '../../layouts/RootLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'fakecheker', element: <FakechekerPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'personal-tapes', element: <PersonalTapesPage /> },
      { path: 'statistics', element: <StatisticsPage /> },
      { path: 'technical-indicators', element: <TechnicalIndicatorsPage /> },
      { path: 'anomalies', element: <AnomaliesPage /> },
      { path: 'persons', element: <PersonsListPage /> },
      { path: 'reports', element: <ReportsPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'notification-settings', element: <NotificationSettingsPage /> },
      { path: 'transcriptions', element: <TranscriptionsPage /> },
      { path: 'folder-management', element: <FolderManagementPage /> },
      { path: 'sources', element: <SourcesPage /> },
    ],
  },
];
