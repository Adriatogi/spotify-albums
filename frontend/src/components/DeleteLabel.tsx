import { deleteLabel } from "../redux/actions"
import { Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function DeleteLabelButton() {
    const selectedLabel = useAppSelector((state) => state.app.selectedLabel);

    const dispatch = useAppDispatch();

    const handleLabelDeletion = () => {
        if (selectedLabel !== '') {
            dispatch(deleteLabel(selectedLabel))
        }
    }

    return (
        <div className="deleteLabel">
            <Button variant="danger" onClick={handleLabelDeletion}>
                Delete Selected Label
            </Button>
        </div>
    )
}

export default DeleteLabelButton