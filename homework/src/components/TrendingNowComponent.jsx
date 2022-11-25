import { Component } from "react";
import { Col } from "react-bootstrap";

class TrendingNowComponent extends Component {
  state = {
    movies: [],
  };

  renderMovies = async () => {
    try {
      let response = await fetch(` https://www.omdbapi.com/?i=tt3896198&apikey=d7877f6d&s=matrix`);

      if (response.ok) {
        let movieList = await response.json();
        console.log({ movieList });

        this.setState({
          movies: movieList.Search,
        });
      } else {
        console.log("something wrong when fetching");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  componentDidMount() {
    this.renderMovies();
  }

  render() {
    return (
      <div className="movie-gallery container-fluid" id="movieGallery">
        <h5 className="text-light mb-4">{this.props.title}</h5>
        <div id="trending-now" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="movie-row">
                <div className="row m-n-2">
                  {this.state.movies.map((movie) => (
                    <Col className="col-md-2 px-2" key={movie.imdbID}>
                      <img className="movie-cover img-fluid rendered-image" src={movie.Poster} />
                    </Col>
                  ))}
                  {/* <div className="col-md-2 px-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image1} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image2} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image1} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image2} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image1} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img class="movie-cover img-fluid rendered-image" src={this.props.image2} />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="movie-row">
                <div className="row">
                  <div className="col-md-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image1} />
                  </div>
                  <div class="col-md-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image2} />
                  </div>
                  <div class="col-md-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image1} />
                  </div>
                  <div class="col-md-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image2} />
                  </div>
                  <div class="col-md-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image1} />
                  </div>
                  <div class="col-md-2">
                    <img className="movie-cover img-fluid rendered-image" src={this.props.image2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#trending-now" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#trending-now" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
export default TrendingNowComponent;
