interface ExpenseListData {
  description: string;
  amount: number;
  categories: string;
}
interface ExpenseListProps {
  expenses: ExpenseListData[];
}

function ExpenseList({ expenses }: ExpenseListProps) {
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
          <tr>
            {
              // loop through all
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
