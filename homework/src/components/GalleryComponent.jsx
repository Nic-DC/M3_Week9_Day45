import { Component } from "react";

class GalleryComponent extends Component {
  render() {
    return (
      <div class="movie-gallery container-fluid" id="movieGallery">
        <h5 class="text-light">Trending Now</h5>
        <div id="trending-now" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="movie-row">
                <div class="row m-n-2">
                  <div class="col-md-2 px-2">
                    <img class="movie-cover img-fluid" src={this.props.image1} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img class="movie-cover img-fluid" src={this.props.image2} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img class="movie-cover img-fluid" src={this.props.image1} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img class="movie-cover img-fluid" src={this.props.image2} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img class="movie-cover img-fluid" src={this.props.image1} />
                  </div>
                  <div class="col-md-2 px-2">
                    <img class="movie-cover img-fluid" src={this.props.image2} />
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="movie-row">
                <div class="row">
                  <div class="col-md-2">
                    <img class="movie-cover" src={this.props.image1} />
                  </div>
                  <div class="col-md-2">
                    <img class="movie-cover" src={this.props.image2} />
                  </div>
                  <div class="col-md-2">
                    <img class="movie-cover" src={this.props.image1} />
                  </div>
                  <div class="col-md-2">
                    <img class="movie-cover" src={this.props.image2} />
                  </div>
                  <div class="col-md-2">
                    <img class="movie-cover" src={this.props.image1} />
                  </div>
                  <div class="col-md-2">
                    <img class="movie-cover" src={this.props.image2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#trending-now" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#trending-now" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}
export default GalleryComponent;
