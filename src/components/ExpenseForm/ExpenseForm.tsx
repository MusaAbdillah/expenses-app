import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../../categories";
import errorMap from "zod/lib/locales/en";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must at least 3 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01, { message: "Amount must at least 0" })
    .max(100_000, { message: "Maximum amount 100_000" }),
  categories: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

// alternative structure with zod
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, //destructure
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log("--- data ---");
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            // with react hook form
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}.</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Age
          </label>
          <input
            // with react hook form
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}.</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="categories" className="form-label">
            Categories
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
