import logo from "../src/netflix/assets/netflix_logo.png";
import image1 from "../src/netflix/assets/media/media0.jpg";
import image2 from "../src/netflix/assets/media/media1.jpg";
import avatar from "../src/netflix/assets/avatar.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // link the boostrap.css

import NavbarComponent from "./components/NavbarComponent";
import GenreComponent from "./components/GenreComponent";
// import GalleryComponent from "./components/GalleryComponent";
import TrendingNowComponent from "./components/TrendingNowComponent";
import WatchLaterComponent from "./components/WatchLaterComponent";
import NewReleasesComponent from "./components/NewReleasesComponent";

function App() {
  return (
    <div>
      <NavbarComponent logo={logo} avatar={avatar} />

      <GenreComponent />

      <TrendingNowComponent title="Trending Now" image1={image1} image2={image2} />
      <WatchLaterComponent title="Trending Now" image1={image1} image2={image2} />
      <NewReleasesComponent title="Trending Now" image1={image1} image2={image2} />
    </div>
  );
}

export default App;
