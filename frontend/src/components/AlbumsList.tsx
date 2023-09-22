import { useAppSelector } from "../redux/hooks";
import Card from 'react-bootstrap/Card';

function AlbumsList() {
    const albumsLabel = useAppSelector((state) => state.app.labelAlbums);
    return (
        <div className="albumList">
            {albumsLabel.map((album, index) =>
                <div className="album" key={index}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img
                            variant="top"
                            src={album.img_url}
                            alt=""
                        />
                        <Card.Body>
                            <Card.Text>{album.name}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
            }
        </div >
    )
}

export default AlbumsList