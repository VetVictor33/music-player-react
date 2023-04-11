import './Player.css'
import Stop from '../../src/assets/stop.svg'
import Previous from '../../src/assets/previous.svg'
import Pause from '../../src/assets/pause.svg'
import Play from '../../src/assets/play.svg'
import Next from '../../src/assets/next.svg'
import { useRef, useState } from 'react'
import { musics } from '../../musics'

export default function Player({ music }) {
    const [currentMusic, setCurrentMusic] = useState({ ...music })

    const audio = useRef(null);
    const [musicState, setMusicState] = useState({ state: 'paused', src: Play });

    const handleAudioPlay = () => {
        if (musicState.state === 'paused') {
            audio.current.play();
            setMusicState({ state: 'playing', src: Pause })
        } else {
            audio.current.pause();
            setMusicState({ state: 'paused', src: Play })
        }
    }

    const handleSongchanges = (change) => {
        let newMusic;
        if (change === 'next') {
            const index = id >= musics.length ? 1 : id + 1;
            newMusic = musics.find(music => music.id === index);
        } else if (change === 'previous') {
            const index = id <= 1 ? musics.length : id - 1;
            newMusic = musics.find(music => music.id === index);

        }

        setCurrentMusic({ ...newMusic });
        setMusicState({ state: 'paused', src: Play });
    }

    const handleStop = () => {
        audio.current.pause();
        audio.current.currentTime = 0;
        setMusicState({ state: 'paused', src: Play });

    }

    const { id, title, artist, description, url, cover } = currentMusic;

    return (
        <div className='Player'>
            <div className='info'>
                <h2>{title}</h2>
                <p>{artist}</p>
            </div>
            <div className='music-controls'>
                <div className='controller'>
                    <img src={Stop} alt="stop" onClick={handleStop} />
                    <img src={Previous} alt="previous" onClick={() => handleSongchanges('previous')} />
                    <img src={musicState.src} alt="pause" onClick={handleAudioPlay} />
                    <img src={Next} alt="next" onClick={() => handleSongchanges('next')} />
                </div>
                <audio ref={audio} src={url} controls ></audio>
            </div>
        </div>
    )
}