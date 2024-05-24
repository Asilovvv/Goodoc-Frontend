import React from 'react';
import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
const Frequency = ({component,setComponent}) => {
    console.log(component)

    return (
        <div>
            <Button onClick = {() => setComponent(component+1)}>

                Frequency
            </Button>
        </div>
    );
};

export default Frequency;