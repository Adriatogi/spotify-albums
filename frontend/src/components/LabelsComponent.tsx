import LabelButton from "./LabelButton"
import LabelList from "./LabelList";
import { useAppSelector } from "../redux/hooks";
import DeleteLabelButton from "./DeleteLabel";

function LabelsComponent() {
    const labels = useAppSelector((state) => state.app.labels);

    return (
        <div>
            <LabelButton />
            {labels.length > 0 ?
                (
                    <div className="labelList">
                        <LabelList />
                    </div>
                ) : (<p style={{ color: 'white' }}>No labels</p>)
            }
            <DeleteLabelButton />
        </div>
    )
}

export default LabelsComponent