import './App.css';
import {Header } from "./components/Header";
import SideBar from './components/SideNav'
import RecommendVedios from './components/RecommendVedios';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
      <SideBar />
      <RecommendVedios />
      </div>
     
    </div>
  );
}

export default App;
