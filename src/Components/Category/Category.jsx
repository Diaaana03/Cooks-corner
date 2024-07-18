import classes from "./Category.module.css";
import heart from "../../Assets/Images/heart.svg";
import save from "../../Assets/Images/save.svg";
import omlet from "../../Assets/Images/omlet.svg";

export default function Category() {
  return (
    <>
      <div className={classes.category}>
        <div className={classes.category__container}>
          <div className={classes.meal}>
            <h2>Egg Omlet</h2>
            <p>by Ainsley Harriott</p>
            <div className={classes.meal__saved}>
              <img src={heart} alt="heart-icon" />
              <h4>118</h4>
              <img src={save} alt="save-icon" />
              <h4>118</h4>
            </div>
          </div>
          <img src={omlet} className={classes.meal__img} alt="meal-img" />
        </div>
      </div>
    </>
  );
}
