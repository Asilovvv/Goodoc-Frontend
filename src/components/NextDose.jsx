import React from 'react';
import Button from "@mui/material/Button";

const NextDose = ({component,setComponent}) => {
    console.log(component)

    return (
        <div>
            <Button onClick = {() => setComponent(component+1)}>

                NextDose
            </Button>
        </div>
    );
};

export default NextDose;