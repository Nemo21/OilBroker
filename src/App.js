import './App.css';
import Home from './pages/Home';
import HomeData from './data/HomeData'

function App() {
  return (
    <div className="App">
      <Home sections={HomeData}/>
    </div>
  );
}

export default App;
