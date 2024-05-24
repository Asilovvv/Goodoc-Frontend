import React from 'react';
import Button from "@mui/material/Button";

const Extra = ({component,setComponent}) => {
    console.log(component)

    return (
        <div>
            <Button onClick = {() => setComponent(component+1)}>

                Extra
            </Button>
        </div>
    );
};

export default Extra;