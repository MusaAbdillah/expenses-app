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
  if (expenses.length === 0) return null;

  return (
    <div className="mt-3">
      <table className="table table-bordered">
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
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ${expenses.reduce((acc, exp) => exp.amount + acc, 0).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpenseList;
