import { useState, ChangeEvent, FormEvent } from "react";
import { Expence } from "../../types";

type Props = {
  onCreate: (newExpence: Expence) => void;
};

const ExpenceForm = (props: Props) => {
  const [newExpence, setNewExpence] = useState<Expence>({
    name: "",
    amount: 0,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newExpenceCopy = structuredClone(newExpence);

    const name = event.target.name as "name" | "amount";
    const value = event.target.value;

    if (name === "amount") {
      newExpenceCopy[name] = parseInt(value) || 0;
    } else {
      newExpenceCopy[name] = value;
    }

    setNewExpence(newExpenceCopy);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onCreate(newExpence);
    setNewExpence({ name: "", amount: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={newExpence.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="Amount"
        value={newExpence.amount}
        onChange={handleChange}
        name="amount"
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default ExpenceForm;
