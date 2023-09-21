import React from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import Button from "react-bootstrap/Button"
import { getAlbums, selectLabel } from '../redux/actions';

function LabelList() {
    const labels = useAppSelector((state) => state.app.labels);
    const selected = useAppSelector((state) => state.app.selectedLabel);
    const dispatch = useAppDispatch();

    const handleLabelSelect = (e: string) => {
        dispatch(selectLabel(e))
        dispatch(getAlbums(e))
    }

    return (
        <div className="labels">

            {labels.map((label, index) =>
                <Button variant={selected === label ? 'light' : 'outline-light'}
                    className='label'
                    key={index}
                    onClick={() => handleLabelSelect(label)}>
                    {label}
                </Button>
            )}
        </div>
    );
}

export default LabelList
