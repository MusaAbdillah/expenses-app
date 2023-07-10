import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
function App() {
  // Utilities, Groceries, Enterteiments;
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Tissue",
      amount: 0,
      category: "Utilities",
    },
    {
      id: 2,
      description: "Shampoo",
      amount: 10,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Battery",
      amount: 20,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Mouse",
      amount: 30,
      category: "Utilities",
    },
  ]);

  const onDelete = (id: number) => {
    console.log("onDelete");
    console.log(id);
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div className="container">
      <Form />
      <ExpenseList expenses={expenses} onDelete={onDelete} />
    </div>
  );
}

export default App;
