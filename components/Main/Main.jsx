import './Main.css'
import { musics } from '../../musics'
import MusicCard from '../MusicCard/MusicCard'
import Player from '../Player/Player'
import { useState } from 'react'

export default function Main() {
    const [playing, setPlaying] = useState(musics[0])

    function handleMusicSelection(musicId) {
        const newMusic = musics.find(music => music.id === +musicId);
        setPlaying(newMusic);
    }


    return (
        <main className='Main'>
            <div>
                <h2>The best playlist</h2>
                <div className='music-cards'>
                    {musics.map(music => {
                        return (
                            <div onClick={() => handleMusicSelection(`${music.id}`)}>
                                <MusicCard key={music.id} music={music} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Player key={playing.id} music={playing} />
        </main>
    )
}