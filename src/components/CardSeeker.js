
const open = url => window.open(url)

const CardSeeker = ({ id, image, link, description }) =>
    <div className="card">
        <p>{description}</p>
        <img src={image} alt={id} onClick={() => open(link)} />
    </div>

export default CardSeeker;