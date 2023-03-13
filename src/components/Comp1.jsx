import "./Comp1.css";
import comp1css from "./Comp1.module.css";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
const Comp1 = (props) => {
  console.table(props);
  return (
    <>
      <div>
        <Comp3 name={props.name} lname={props.lname} />
        <Comp4 designation={props.desig} />
      </div>
    </>
  );
};
export default Comp1;
