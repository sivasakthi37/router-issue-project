import React from "react";

export default class About extends React.Component {
  onNavigateHome = () => {};

  render() {
    return (
      <div>
        <h3>The About Page</h3>
        <p>About Id: </p>
        <button onClick={this.onNavigateHome} className="btn btn-primary">
          Go Home!
        </button>
      </div>
    );
  }
}
