// eslint-disable-next-line no-unused-vars
import React from 'react';
import Circular from "../images/Circular.png"

// eslint-disable-next-line react/prop-types
const Drugs = ({component, setComponent}) => {
    console.log(component)

    return (
        <>
            <div className="header">

                <div className="headerLogo">
                    <img src={Circular} alt="Circular" className="circular"/>

                </div>
                <div className="headerTitle">
                    <div className="titleText">
                        Лекарство
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

                <input className="contentInput" type="text" placeholder={"Название лекарства"}/>
                <div className="contentButton">
                    <button className="btn1"  onClick={() => setComponent(component + 1)}>
                        Продолжить
                    </button>
                </div>
            </div>
        </>
    );
};

export default Drugs;


