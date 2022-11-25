import logo from "../src/netflix/assets/netflix_logo.png";
import avatar from "../src/netflix/assets/avatar.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // link the boostrap.css

import NavbarComponent from "./components/NavbarComponent";
import GenreComponent from "./components/GenreComponent";
// import GalleryComponent from "./components/GalleryComponent";
import TrendingNowComponent from "./components/TrendingNowComponent";
import WatchLaterComponent from "./components/WatchLaterComponent";
import NewReleasesComponent from "./components/NewReleasesComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent logo={logo} avatar={avatar} />

      <GenreComponent />

      <TrendingNowComponent title="Trending Now" classes="movie-cover img-fluid rendered-image" />
      <WatchLaterComponent title="Watch Later" classes="movie-cover img-fluid rendered-image" />
      <NewReleasesComponent title="New Releases" classes="movie-cover img-fluid rendered-image" />
      <FooterComponent />
    </div>
  );
}

export default App;
