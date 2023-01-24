import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';

function App() {
  return (
    <div className="App">
    <Topbar/>
    <div className="app-container">
    <Sidebar/>
    <div className="main-page">other pages</div>
    </div>
     
    </div>
  );
}

export default App;
