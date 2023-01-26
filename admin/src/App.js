import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import Home from './Pages/home/Home';

function App() {
  return (
    <div className="App">
    <Topbar/>
    <div className="app-container">
     <Sidebar/>

      <Home/>
    </div>
     
    </div>
  );
}

export default App;
