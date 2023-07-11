interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}
function ExpenseFilter({ onSelectCategory }: ExpenseFilterProps) {
  return (
    <div>
      <select
        className="form-select form-select-md"
        aria-label=".form-select-sm example"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option selected>All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
