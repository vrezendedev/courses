import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return (
    <div>
      {song != null ? (
        <div>
          <h1>Details for:</h1>
          <h3>{song.title}</h3>
          <p>{song.duration}</p>
        </div>
      ) : (
        <h1>Select a Song!</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
