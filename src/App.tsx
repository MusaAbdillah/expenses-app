import Hello from "./components/hello/Hello";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
function App() {
  return (
    <div className="container">
      <Form />
      <ExpenseList />
    </div>
  );
}

export default App;
