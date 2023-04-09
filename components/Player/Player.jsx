import './Player.css'
import Stop from '../../src/assets/stop.svg'
import Previous from '../../src/assets/previous.svg'
import Pause from '../../src/assets/pause.svg'
import Next from '../../src/assets/next.svg'

export default function Player({ music }) {
    const { title, artist, description, url, cover } = music
    return (
        <div className='Player'>
            <div className='info'>
                <h2>{title}</h2>
                <p>{artist}</p>
            </div>
            <div className='music-controls'>
                <div className='controller'>
                    <img src={Stop} alt="stop" />
                    <img src={Previous} alt="previous" />
                    <img src={Pause} alt="pause" />
                    <img src={Next} alt="next" />
                </div>
                <audio src={url} controls></audio>
            </div>
        </div>
    )
}