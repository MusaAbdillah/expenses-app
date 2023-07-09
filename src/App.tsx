import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
function App() {
  // Utilities, Groceries, Enterteiments;
  const [expenses, setExpenses] = useState([
    {
      description: "Tissue",
      amount: 0,
      categories: "Utilities",
    },
  ]);

  return (
    <div className="container">
      <Form />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
