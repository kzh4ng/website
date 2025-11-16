import React    from "react";
import template from "./Photo.jsx";

class Photo extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Photo;
