import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
      </div>
    </div>
  );
}

export default App;
