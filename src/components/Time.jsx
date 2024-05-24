import React from 'react';
import Button from "@mui/material/Button";

const Time = ({component,setComponent}) => {
    console.log(component)

    return (
        <div>
            <Button onClick = {() => setComponent(component+1)}>
                Time
            </Button>
        </div>
    );
};

export default Time;