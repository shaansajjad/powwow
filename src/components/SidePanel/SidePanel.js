import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel/UserPanel";

export default class SidePanel extends Component {
  render() {
    return (
      <div>
        <Menu
          size="large"
          inverted
          fixed="left"
          vertical
          style={{ background: "#4c3c4c", fontSize: "1.2rem" }}
        >
          <UserPanel />
        </Menu>
      </div>
    );
  }
}
