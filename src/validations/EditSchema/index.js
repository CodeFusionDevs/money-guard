import * as yup from "yup";

export const editSchema = yup
  .object({
      amount: yup
    .number("Enter a number!")
    .required("Amount is required!"),
    date: yup
    .date()
    .typeError("You must select a valid date!")
    .required("Date is required!"),
      comment: yup
    .string()
    .required("Comment is required!"),
  })
  .required();
