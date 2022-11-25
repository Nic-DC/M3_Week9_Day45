import { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

class DropdownComponent extends Component {
  render() {
    return (
      <div className="">
        <DropdownButton
          id="dropdown-basic-button"
          title={<img className="img-fluid" id="avatar" src={this.props.avatar} />}
          a
          key="Dark"
          variant="Dark"
        >
          <Dropdown.Item href="#/action-1" className="btn-bg">
            {<img className="img-fluid" id="avatar-small" src={this.props.avatar} />} yo
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="btn-bg">
            Manage Profile
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="btn-bg">
            Account
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4" className="btn-bg">
            Help Center
          </Dropdown.Item>
          <hr />
          <Dropdown.Item href="#/action-5" className="btn-bg">
            Sign Out
          </Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default DropdownComponent;
