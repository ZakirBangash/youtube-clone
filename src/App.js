import "./App.css";
import { Header } from "./components/Header";
import SideBar from "./components/SideNav";
import RecommendVedios from "./components/RecommendVedios";
import { Routes, Route } from "react-router-dom";
import SearchPage from './components/SearchPage'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
                <RecommendVedios />
              </div>
            </>
          }
        />

        <Route
          path="search/:slug"
          element={
            <>
              <Header />
              <div className="app__page">
              <SideBar />
              <SearchPage />
              </div>
             
            
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
