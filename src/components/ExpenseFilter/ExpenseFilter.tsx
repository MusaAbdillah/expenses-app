import { categories } from "../../App";

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
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;
