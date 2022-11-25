import { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

class DropdownGenres extends Component {
  render() {
    return (
      <div className="">
        <DropdownButton
          id="dropdown-button-drop-left"
          title="Genres"
          key="transparent"
          variant="transparent"
          className="genreBtn"
        >
          <Dropdown.Item href="#/action-2" className="btn-bg">
            Adventure
          </Dropdown.Item>
          <hr />
          <Dropdown.Item href="#/action-3" className="btn-bg">
            Action
          </Dropdown.Item>
          <hr />
          <Dropdown.Item href="#/action-4" className="btn-bg">
            Comedy
          </Dropdown.Item>
          <hr />
          <Dropdown.Item href="#/action-5" className="btn-bg">
            Romance
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default DropdownGenres;
