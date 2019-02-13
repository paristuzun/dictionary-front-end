import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageContainer extends Component{

  render() {
    return (
      <div>
          {this.props.user.username}
            {this.props.user.topics}
            {this.props.user.entries}
        </div>
    );
  }
}
