import "./App.css";
import Home from "./pages/Home";
import HomeData from "./data/HomeData";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home sections={HomeData} />
    </div>
  );
}

export default App;
