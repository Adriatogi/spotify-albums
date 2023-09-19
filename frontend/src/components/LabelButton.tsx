import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../redux/hooks';
import { addLabel } from '../redux/actions';

function LabelButton() {
    const dispatch = useAppDispatch();
    const [newLabel, setNewLabel] = useState<string>('');

    const handleAddLabel = () => {
        if (newLabel.trim() !== '') {
            dispatch(addLabel(newLabel));
            setNewLabel('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
            />
            <Button onClick={handleAddLabel}>Add Label</Button>
        </div>
    );
};

export default LabelButton;
