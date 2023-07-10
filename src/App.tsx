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
