import { useEffect, useRef } from 'react'
import './MusicCard.css'

export default function MusicCard({ music, playing }) {
    const { title, description, cover } = music

    const selection = useRef(null);

    useEffect(() => {
        if (music.title === playing.title) {
            selection.current.classList.add('selected');
        } else {
            selection.current.classList.remove('selected');
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