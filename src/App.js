import "./App.css";
import { Header } from "./components/Header";
import SideBar from "./components/SideNav";
import RecommendVedios from "./components/RecommendVedios";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Trending from './components/SideNav/Trending'
import Subscription from './components/SideNav/Subscription'
import History from './components/SideNav/History'
import Library from './components/SideNav/Library'
import LikedVideos from './components/SideNav/LikedVideos'
import ShowMore from './components/SideNav/ShowMore'
import WatchLater from './components/SideNav/WatchLater'
import YourVideos from './components/SideNav/YourVideos'

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
                <SideBar selected />
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

        <Route
          path="trending"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
                <Trending />
              </div>
            </>
          }
        />

       <Route
          path="subscription"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
                <Subscription />
              </div>
            </>
          }
        />

<Route
          path="library"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
              <Library />
              </div>
            </>
          }
        />

<Route
          path="history"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
                <History />
              </div>
            </>
          }
        />

<Route
          path="watchLater"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
                <WatchLater />
              </div>
            </>
          }
        />

<Route
          path="yourVideos"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
                <YourVideos />
              </div>
            </>
          }
        />

<Route
          path="likedVideos"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
                <LikedVideos />
              </div>
            </>
          }
        />

<Route
          path="showMore"
          element={
            <>
              <Header />
              <div className="app__page">
                <SideBar />
                <ShowMore />
              </div>
            </>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
