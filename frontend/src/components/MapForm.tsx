import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '../redux/hooks';
import { postMap } from '../redux/actions';

function MapForm() {
    const dispatch = useAppDispatch();
    const [label, setLabel] = useState('')
    const [id, setId] = useState('')

    const handeLabelSubmit = (e: any) => {
        const formData = new FormData();
        formData.append('label', label);
        formData.append('id', id);
        dispatch(postMap(formData));
        setLabel('')
        setId('')
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handeLabelSubmit}>
                <input
                    type="text"
                    name="label"
                    value={label || ''}
                    onChange={(e) => {
                        setLabel(e.target.value);
                    }}
                    placeholder="Label"
                />
                <input
                    type="text"
                    name="id"
                    value={id || ''}
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                    placeholder="Album Id"
                />
                <Button type="submit">Add Album to Label</Button>
            </form>
        </div>
    );
};

export default MapForm
