import React from "react";

import SearchBar from "./components/SearchBar";
import api from "./api/Api";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = { searchTerm: [], selectedVideo: null };
  handleSubmit = async (term) => {
    await api
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((response) => {
        this.setState({
          searchTerm: response.data.items,
          selectedVideo: response.data.items[0],
        });
      });
  };

  onVideoSelect = (video) => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.handleSubmit("planes");
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail detailVideo={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.searchTerm}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
