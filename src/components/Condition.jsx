
// eslint-disable-next-line no-unused-vars
import Circular1  from "../images/Circular1.png"
import axios from "axios";
import React from "react";

const baseURL = "http://localhost:9999/releaseForm/all";


// eslint-disable-next-line react/prop-types
const Condition = ({component, setComponent}) => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []);

    console.log(data);


    return (
        <>
            <div className="header">

                <div className="headerLogo">
                    <img src={Circular1} alt="Circular1" className="circular"/>

                </div>
                <div className="headerTitle">
                    <div className="titleText">
                        Форма выпуска

                    </div>
                    <div className="descrText">

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
            </div>
            <div className="content">

                <div className="contentTitle">
                    Какое лекарство хотите добавить?
                </div>


                <div className="contentButton1">
                    {
                        data?.map(item => (
                            <button className="btn" onClick={() => setComponent(component + 1)}
                                    key={item.id}>{item.name}</button>

                        ))
                    }
                </div>
            </div>
        </>
    );
};
export default Condition;


