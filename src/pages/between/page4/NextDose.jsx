import Page4 from "../../../images/page4img.jpg"
import classes from "../page4/NextDose.module.css"
const NextDose =()=>{
    return (
        <div id={classes.form} className="flex_container full-page">
            <img src={Page4} alt="Page4" className={classes.Page4}/>
            <span className={classes.text}>Частота приема</span>
            <span className={classes.text2}>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</span>
            <form id={classes.form2}className="answers_container">
                <span className={classes.question}>Когда вам нужно принять следующую дозу?</span>
            </form>
        </div>
        
    )
}
export default NextDose;