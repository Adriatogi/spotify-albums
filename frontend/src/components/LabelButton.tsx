import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../redux/hooks';
import { postLabel } from '../redux/actions';

function LabelButton() {
    const dispatch = useAppDispatch();
    const [newLabel, setNewLabel] = useState('')

    const handleLabelSubmit = (e: any) => {
        const formData = new FormData();
        formData.append('label', newLabel);
        dispatch(postLabel(formData));
        setNewLabel('')
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleLabelSubmit}>
                <input
                    type="text"
                    name="label"
                    value={newLabel || ''}
                    onChange={(e) => {
                        setNewLabel(e.target.value);
                    }}
                    placeholder="New Label"
                />
                <Button type="submit">Add Label</Button>
            </form>
        </div>
    );
};

export default LabelButton;
