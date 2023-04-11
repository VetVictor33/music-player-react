import './Main.css'
import { musics } from '../../../musics'
import MusicCard from '../MusicCard/MusicCard'
import Player from '../Player/Player'
import { useState } from 'react'

export default function Main() {
    const [selectedMusic, setSelectedMusic] = useState(musics[0]);
    const [playing, setPlaying] = useState(false);

    function handleMusicSelection(musicId) {
        const newMusic = musics.find(music => music.id === +musicId);
        setSelectedMusic(newMusic);
    }



    return (
        <main className='Main'>
            <div className='musics'>
                <h2>The best playlist</h2>
                <div className='music-cards'>
                    {musics.map(music => {
                        return (
                            <div key={music.id * 3.1469} onClick={() => handleMusicSelection(`${music.id}`)}>
                                <MusicCard key={music.id} music={music} selectedMusic={selectedMusic} playing={playing} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Player key={selectedMusic.id} selectedMusic={selectedMusic} handleMusicSelection={handleMusicSelection} setPlaying={setPlaying} playing={playing} />
        </main>
    )
}