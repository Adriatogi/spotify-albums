import { useAppSelector } from "../redux/hooks";
import Card from 'react-bootstrap/Card';
import { deleteMap } from "../redux/actions";
import { useAppDispatch } from "../redux/hooks";

function AlbumsList() {
    const albumsLabel = useAppSelector((state) => state.app.labelAlbums);
    const selectedLabel = useAppSelector((state) => state.app.selectedLabel);
    const dispatch = useAppDispatch();

    const handleAlbumClick = (id: string) => (event: React.MouseEvent<HTMLDivElement>) => {
        const formData = new FormData();
        formData.append('label', selectedLabel);
        formData.append('id', id);
        dispatch(deleteMap(formData));
    }
    return (
        <div className="albumList">
            {albumsLabel.map((album, index) =>
                <div className="userAlbum" onClick={handleAlbumClick(album.id)} key={index}>
                    <div className="labelAlbumOverlay">-</div>
                    <div className="userAlbumCard" key={index}>
                        <Card style={{ width: '13rem' }}>
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
            )
            }
        </div >
    )
}

export default AlbumsList