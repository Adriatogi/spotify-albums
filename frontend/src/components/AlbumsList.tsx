import { useAppSelector } from "../redux/hooks";

function AlbumsList() {
    const albumsLabel = useAppSelector((state) => state.app.labelAlbums);

    return (
        <div>
            {albumsLabel.map((album, index) =>
                <div key={index}>
                    <h3>{album.name}</h3>
                </div>
            )}
        </div>
    )
}

export default AlbumsList