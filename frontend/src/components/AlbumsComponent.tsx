import MapForm from "./MapForm"
import { useAppSelector } from "../redux/hooks";

function AlbumsComponent() {
    const selectedLabel = useAppSelector((state) => state.app.selectedLabel);

    return (
        <div>
            <h3>{selectedLabel} Albums</h3>
            <MapForm />
        </div>
    )
}

export default AlbumsComponent