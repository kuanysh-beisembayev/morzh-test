import { useState } from "react";
import ExpenceList from "../ExpenceList";
import { Expence } from "../../types";
import ExpenceForm from "../ExpenceForm";

const BudgetTracker = () => {
  const [expences, setExpences] = useState<Expence[]>([
    { name: "fsdfsd", amount: 1000 },
    { name: "fdfd", amount: 2000 },
  ]);

  const handleCreate = (newExpence: Expence) => {
    const expencesCopy = structuredClone(expences);

    expencesCopy.push(newExpence);

    setExpences(expencesCopy);
  };

  const handleDelete = (expenceIndex: number) => {
    let expencesCopy = structuredClone(expences);

    expencesCopy = expencesCopy.filter(
      (_expence, index) => index !== expenceIndex,
    );

    setExpences(expencesCopy);
  };

  return (
    <div>
      <ExpenceForm onCreate={handleCreate} />
      <ExpenceList expences={expences} onDelete={handleDelete} />
    </div>
  );
};

export default BudgetTracker;
