import AlbumsList from "./AlbumsList";
import { useAppSelector } from "../redux/hooks";

function AlbumsComponent() {
    const selectedLabel = useAppSelector((state) => state.app.selectedLabel);
    return (
        <div>
            <h3 className="albumsHeader">{selectedLabel} Albums</h3>
            <AlbumsList />
        </div>
    )
}

export default AlbumsComponent