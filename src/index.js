import React from "react";
import { render } from "react-dom";
import ItineraryProgressMeter from "./ItineraryProgressMeter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "50px"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      complete: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ complete: e.target.value });
  }

  render() {
    return (
      <div style={styles}>
        <ItineraryProgressMeter complete={this.state.complete} />
        <div>
          <label>
            Progress:
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={this.state.complete}
              onChange={this.handleChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
