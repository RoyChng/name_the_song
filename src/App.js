import { useState } from 'react';
import './App.css';
import songs from "./songs";


function App() {
  const [song, setSong] = useState(songs[0]);
  const [reveal, setReveal] = useState(false);

  function nextSong(){
    setSong(songs[Math.floor(Math.random()*songs.length)]);
    setReveal(false);
  }

  return (
    <main>
      <h1>Name The Song</h1>
      { !reveal ? <audio controls src={song.file}>   </audio> : <p>{song.name}</p>}
    
      <button class="btn btn-secondary btn-wide" onClick={() => setReveal((r) => !r)}>Reveal Song</button>
      <button class="btn btn-wide btn-soft" onClick={nextSong}>Next Song</button>

    </main>
  );
}

export default App;
