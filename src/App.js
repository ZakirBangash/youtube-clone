import "./App.css";
import { Header } from "./components/Header";
import SideBar from "./components/SideNav";
import RecommendVedios from "./components/RecommendVedios";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Trending from './components/Trending'
import Subscription from './components/Subscription'
import History from './components/History'
import Library from './components/Library'
import LikedVideos from './components/LikedVideos'
import ShowMore from './components/ShowMore'
import WatchLater from './components/WatchLater'
import YourVideos from './components/YourVideos'

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
