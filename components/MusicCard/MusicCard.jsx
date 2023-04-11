import './MusicCard.css'

export default function MusicCard({ music }) {
    const { title, description, cover } = music
    return (
        <div className='MusicCard'>
            <img src={cover} alt="" />
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </div>
    )
}