import MapForm from "./MapForm"
import AlbumsList from "./AlbumsList";
import { useAppSelector } from "../redux/hooks";

function AlbumsComponent() {
    const selectedLabel = useAppSelector((state) => state.app.selectedLabel);
    return (
        <div>
            <h3 className="albumsHeader">{selectedLabel} Albums</h3>
            <MapForm />
            <AlbumsList />
        </div>
    )
}

export default AlbumsComponent