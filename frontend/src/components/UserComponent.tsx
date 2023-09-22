import { useAppSelector } from "../redux/hooks";
import Card from 'react-bootstrap/Card';

function UserComponent() {
    const userAlbums = useAppSelector((state) => state.app.userAlbums);
    console.log("user", userAlbums.length)
    return (
        <div>
            <h3 className="albumsHeader">User Albums</h3>
            <div className="albumList">
                {userAlbums.map((album, index) =>
                    <div className="album" key={index}>
                        <Card style={{ width: '14rem' }}>
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
        </div>
    )
}

export default UserComponent