import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Card from "react-bootstrap/Card"

function LabelsComponent() {
    const labels = useAppSelector((state) => state.app.labels);

    return (
        <div className="labels">

            {labels.map((label, index) =>
                <React.Fragment key={index}>
                    <Card className="text-center" style={{ width: '5rem', margin: '3px' }}>
                        <Card.Text>{label}</Card.Text>
                    </Card>
                </React.Fragment>
            )}
        </div>
    );
}

export default LabelsComponent
