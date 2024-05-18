import { Expence } from "../../types";
import style from "./style.module.css";

type Props = {
  expence: Expence;
  onDelete: () => void;
};

const ExpenceItem = (props: Props) => {
  const expence = props.expence;

  return (
    <div className={style.item}>
      <p>{expence.name}</p>
      <p>${expence.amount}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default ExpenceItem;
