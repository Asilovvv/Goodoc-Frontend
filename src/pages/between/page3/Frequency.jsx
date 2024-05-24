import Page3 from "../../../images/page3img.jpg"
import classes from "../../between/page3/Frequency.module.css"
import {useEffect, useState} from "react";
import axios from "axios";

const Frequency =()=>{
    const[post, setPost] = useState(null);
    const baseUrl = "https://goodoc-production.up.railway.app/reception/all";
    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setPost(response.data);
        });
    }, []);
    if (!post) return null;
    function create() {
        axios
            .post("https://goodoc-production.up.railway.app/reception/create", {
                answers: "Hello World!",
            })
            .then((response) => {
                setPost(response.data);
            });
    }
    return (
        <div id={classes.form} className="flex_container full-page">
            <img src={Page3} alt="Page3" className={classes.Page3}/>
            <span className={classes.text}>Частота приема</span>
            <span className={classes.text2}>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</span>
            <form id={classes.form2}className="answers_container">
                <span className={classes.question}>Как часто вы его принимаете?</span>
            </form>
            {post.map((item,idx) => (
                <div className="product" key={idx}>
                    <p className="answers">{item.answers}</p>
                </div>
            ))}
        </div>

    )
}
export default Frequency;