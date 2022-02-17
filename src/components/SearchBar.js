import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  watchSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.watchSubmit} name="mysubmit">
          <label htmlFor="mysearch">Video Search</label>
          <input
            id="mysearch"
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
