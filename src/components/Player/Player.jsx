import './Player.css'
import Stop from '../../assets/stop.svg'
import Previous from '../../assets/previous.svg'
import Pause from '../../assets/pause.svg'
import Play from '../../assets/play.svg'
import Next from '../../assets/next.svg'
import { useMemo, useRef, useState } from 'react'
import { musics } from '../../../musics'


export default function Player({ selectedMusic, handleMusicSelection, setPlaying, playing }) {
    const [currentMusic, setCurrentMusic] = useState({ ...selectedMusic })
    const audio = useRef(null);

    const handleAudioPlay = () => {
        if (!playing) {
            audio.current.play();
            setPlaying(true);
        } else {
            audio.current.pause();
            setPlaying(false);
        }
    }

    const handleSongchanges = (change) => {
        let newMusic;
        if (change === 'next') {
            const index = id >= musics.length ? 1 : id + 1;
            newMusic = musics.find(music => music.id === index);
            handleMusicSelection(newMusic.id);
        } else if (change === 'previous') {
            const index = id <= 1 ? musics.length : id - 1;
            newMusic = musics.find(music => music.id === index);
            handleMusicSelection(newMusic.id);
        }
        setCurrentMusic({ ...newMusic });
    }

    const handleStop = () => {
        audio.current.pause();
        audio.current.currentTime = 0;
        setPlaying(false)
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
                    <img src={playing ? Pause : Play} alt="pause" onClick={handleAudioPlay} />
                    <img src={Next} alt="next" onClick={() => handleSongchanges('next')} />
                </div>
                <audio ref={audio} src={url} controls autoPlay={playing} y></audio>
            </div>
        </div>
    )
}