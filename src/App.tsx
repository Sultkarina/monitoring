import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.scss';
import Analytics from './components/Sidebar/Analytics';

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

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/fakecheker" element={<Fakecheker />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/personal-tapes" element={<PersonalTapes />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/technical-indicators" element={<TechnicalIndicators />} />
            <Route path="/anomalies" element={<Anomalies />} />
            <Route path="/persons" element={<PersonsList />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notification-settings" element={<NotificationSettings />} />
            <Route path="/transcriptions" element={<Transcriptions />} />
            <Route path="/folder-management" element={<FolderManagement />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
