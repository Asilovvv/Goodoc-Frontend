import Page3 from "../../../images/page3img.jpg"
import classes from "../../between/page3/Frequency.module.css"
const Frequency =()=>{
    return (
    <div id={classes.form} className="flex_container full-page">
        <img src={Page3} alt="Page3" className={classes.Page3}/>
        <span className={classes.text}>Частота приема</span>
        <span className={classes.text2}>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</span>
        <form id={classes.form2}className="answers_container">
            <span className={classes.question}>Как часто вы его принимаете?</span>
            <button type="submit" className={classes.answers}>Каждый день</button>
            <button type="submit" className={classes.answers}>Три раза в день</button>
            <button type="submit" className={classes.answers}>По определенным дням недели</button>
            <button type="submit" className={classes.answers}>По повторяющемуся циклу</button>
            <button type="submit" className={classes.answers}>Каждые X дней</button>
        </form>
    </div>
    
    )
}
export default Frequency;