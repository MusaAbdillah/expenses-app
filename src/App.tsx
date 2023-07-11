import Form from "./components/Form";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
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

  const [category, setCategory] = useState("");

  const onDelete = (id: number) => {
    console.log("onDelete");
    console.log(id);
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const onSelectCategory = (category: string) => {
    setCategory(category);
  };

  const visibleExpenses = category
    ? expenses.filter((exp) => exp.category === category)
    : expenses;

  return (
    <div className="container">
      <div className="mb-3">
        <Form />
      </div>
      <ExpenseFilter onSelectCategory={onSelectCategory} />
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
}

export default App;
