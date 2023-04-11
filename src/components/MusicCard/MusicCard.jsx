import { useEffect, useRef } from 'react'
import './MusicCard.css'

export default function MusicCard({ music, selectedMusic, playing }) {
    const { title, description, cover } = music

    const selection = useRef(null);

    useEffect(() => {
        if (music.title === selectedMusic.title) {
            selection.current.classList.add('selected');
            if (playing) {
                selection.current.classList.add('playing')
            } else {
                selection.current.classList.remove('playing');
            }
        } else {
            selection.current.classList.remove('selected');
            selection.current.classList.remove('playing');
        }

    })

    return (
        <div className='MusicCard'>
            <div ref={selection}></div>
            <img src={cover} alt="" />
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </div >
    )
}