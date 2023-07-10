interface ExpenseListData {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface ExpenseListProps {
  expenses: ExpenseListData[];
  onDelete: (id: number) => void;
}

function ExpenseList({ expenses, onDelete }: ExpenseListProps) {
  return (
    <div className="mt-3">
      <select
        className="form-select form-select-md"
        aria-label=".form-select-sm example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            // loop through all
            expenses.map((exp) => (
              <tr>
                <th scope="col">{exp.id}</th>
                <th scope="col">{exp.description}</th>
                <th scope="col">{exp.amount}</th>
                <th scope="col">{exp.category}</th>
                <th scope="col">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(exp.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
