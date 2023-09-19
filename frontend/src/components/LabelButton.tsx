import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


interface labelProp {
    labelList: string[];
    updateLabels: (newLabels: string[]) => void;
}

function LabelButton({ labelList, updateLabels }: labelProp) {
    const [isLoading, setIsLoading] = useState(false);

    const labelApiRequest = () => {
        setIsLoading(true);

        // Make the API request
        fetch("/labels", {
            method: 'GET', // You can use other HTTP methods like POST, PUT, etc.
        })
            .then((res) => res.json())
            .then((data) => {
                // handle labels

                labelList = data.labels
                updateLabels(labelList)
                console.log(labelList);
                setIsLoading(false);
            })
            .catch((error) => {
                // Handle errors here
                console.error(error);

                setIsLoading(false);
            });
    };

    return (
        <div>
            <Button variant="outline-primary" onClick={labelApiRequest} disabled={isLoading} style={{ margin: '10px' }}>
                {isLoading ? 'Loading...' : 'Get Labels'}
            </Button>
        </div>
    );
};

export default LabelButton;
