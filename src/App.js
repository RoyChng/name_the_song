import { useState } from "react";
import "./App.css";
import songs from "./songs";
import headerImg from "./imgs/name-the-song.png";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function getRandomSong() {
  return songs[Math.floor(Math.random() * songs.length)];
}

let selectedSongs = [];

function App() {
  const [song, setSong] = useState(getRandomSong());
  const [reveal, setReveal] = useState(false);

  function nextSong() {
    const prevSongName = song.name;

    selectedSongs.push(prevSongName);
    selectedSongs = selectedSongs.slice(-3); // Only want to keep track of 3 most recently selected songs
    console.log(selectedSongs);
    while (true) {
      const newSong = getRandomSong();
      if (!selectedSongs.includes(newSong.name)) {
        setSong(newSong);
        setReveal(false);
        break;
      }
    }
  }

  return (
    <main>
      <img src={headerImg} className="header-img" />

      {!reveal ? (
        <AudioPlayer
          autoPlay={false}
          showJumpControls={false}
          showSkipControls={false}
          src={song.file}
        />
      ) : (
        <div role="alert" class="alert alert-vertical sm:alert-horizontal">
          <img className="song-img" src={song.cover} />
          <div>
            <h3 class="font-bold">{song.name}</h3>
            <div class="text-xs">by {song.artist}</div>
          </div>
        </div>
      )}

      <button
        class="btn btn-secondary btn-wide tooltip"
        data-tip="Make a guess of the song before revealing it!"
        onClick={() => setReveal((r) => !r)}
      >
        Reveal Song
      </button>
      <button class="btn btn-wide btn-soft" onClick={nextSong}>
        Next Song
      </button>
    </main>
  );
}

export default App;
