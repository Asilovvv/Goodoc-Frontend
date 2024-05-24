// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Drugs from "../components/Drugs.jsx";
import Condition from "../components/Condition.jsx";
import Frequency from "../components/Frequency.jsx";
import Reception from "../components/Reception.jsx";
import NextDose from "../components/NextDose.jsx";
import Time from "../components/Time.jsx";
import Extra from "../components/Extra.jsx";

const Between = () => {
    const [component, setComponent] = useState(1)
        switch (component) {
            case 1:
                return <Drugs component = {component} setComponent = {setComponent}/>;
            case 2:
                return <Condition component = {component} setComponent = {setComponent}/>;
            case 3:
                return <Frequency component = {component} setComponent = {setComponent}/>;
            case 4:
                return <Reception component = {component} setComponent = {setComponent}/>;
            case 5:
                return <NextDose component = {component} setComponent = {setComponent}/>;
            case 6:
                return <Time component = {component} setComponent = {setComponent}/>;
            default:
                return <Extra component = {component} setComponent = {setComponent}/>;
        }
};

export default Between;