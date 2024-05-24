// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from "@mui/material/Button";

const Reception = ({component,setComponent}) => {
    console.log(component)

    return (
        <div>
            <Button onClick = {() => setComponent(component+1)}>

                Reception
            </Button>
        </div>
    );
};

export default Reception;