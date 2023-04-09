import './Main.css'
import { musics } from '../../musics'
import MusicCard from '../MusicCard/MusicCard'
import Player from '../Player/Player'
import { useState } from 'react'

export default function Main() {
    const [playing, setPlaying] = useState(musics[0])

    const handleMusicSelection = (e) => {

    }

    return (
        <main className='Main'>
            <div>
                <h2>The best playlist</h2>
                <div className='music-cards'>
                    {musics.map(music => {
                        return (
                            <MusicCard key={music.id} music={music} onClick={handleMusicSelection} />
                        )
                    })}
                </div>
            </div>
            <Player music={playing} />
        </main>
    )
}