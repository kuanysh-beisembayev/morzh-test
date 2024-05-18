import { Expence } from "../../types";
import ExpenceItem from "../ExpenceItem";

type Props = {
  expences: Expence[];
  onDelete: (expenceIndex: number) => void;
};

const ExpenceList = (props: Props) => {
  return (
    <div>
      {props.expences.map((expence, index) => (
        <ExpenceItem
          key={index}
          expence={expence}
          onDelete={() => props.onDelete(index)}
        />
      ))}
    </div>
  );
};

export default ExpenceList;
