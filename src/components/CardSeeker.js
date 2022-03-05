
const open = url => window.open(url)

const CardSeeker = ({ id, image, link }) =>
    <div className="card">
        <p>id: {id}</p>
        <img src={image} alt={id} onClick={() => open(link)} />
    </div>

export default CardSeeker;