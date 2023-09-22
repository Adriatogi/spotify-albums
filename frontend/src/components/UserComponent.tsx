import { useAppSelector, useAppDispatch } from "../redux/hooks";
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { Button } from "react-bootstrap";
import { fetchUserAlbums } from "../redux/actions";
import { postMap } from "../redux/actions";

function UserComponent() {
    const userAlbums = useAppSelector((state) => state.app.userAlbums);
    const selectedLabel = useAppSelector((state) => state.app.selectedLabel);
    const [albumLevel, setAlbumLevel] = useState(1);
    const dispatch = useAppDispatch();

    const handleAlbumLoad = () => {
        setAlbumLevel(albumLevel + 1)
        dispatch(fetchUserAlbums(albumLevel))
    }

    const handleAlbumClick = (id: string) => (event: React.MouseEvent<HTMLDivElement>) => {
        const formData = new FormData();
        formData.append('label', selectedLabel);
        formData.append('id', id);
        dispatch(postMap(formData));
    }

    return (
        <div>
            <h3 className="albumsHeader">User Albums</h3>
            <div className="userAlbumList">
                {userAlbums.map((album, index) =>
                    <div className="userAlbum" onClick={handleAlbumClick(album.id)} key={index}>
                        <div className="userAlbumOverlay">+</div>
                        <div className="userAlbumCard">
                            <Card style={{ width: '10rem' }}>
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
                    </div>
                )}
            </div >
            <Button
                variant="primary"
                onClick={handleAlbumLoad}
                style={{ marginBottom: '20px' }}>
                Load More
            </Button>
        </div >
    )
}

export default UserComponent