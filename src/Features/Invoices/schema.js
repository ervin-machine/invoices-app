import * as Yup from "yup";
export const InvoiceSchema = Yup.object().shape({
    sellerName: Yup.object()
    .shape({
      companyName: Yup.string(),
      hqAddress: Yup.string(),
      isActive: Yup.boolean()
    })
    .required("Please select a seller"),
    customerName: Yup.object()
    .shape({
      name: Yup.string(),
      surname: Yup.string(),
      address: Yup.string(),
      age: Yup.string()
    })
    .required("Please select a customer"),
    date: Yup.date()
        .max(new Date(), "Date cannot be in the future")
        .required('Date is required'),
    amount: Yup.string()
        .min(1, "Amount needs to be more than 0")
        .required('Amount is required'),
});
