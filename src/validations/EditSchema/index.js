import * as yup from "yup";

export const editSchema = yup
  .object({
    amount: yup
      .number("Enter a number!")
      .positive("Amount must be positive!")
      .required("Amount is required!"),
    comment: yup
      .string()
      .trim()
      .max(100, "Comment must be less than 100 characters")
      .required("Comment is required!"),
    category: yup.mixed(),
  })
  .required();
