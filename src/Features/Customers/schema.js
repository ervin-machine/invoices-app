import * as Yup from "yup";
export const CustomerSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    surname: Yup.string()
        .required('Surname is required'),
    address: Yup.string()
        .required('Address is required'),
    age: Yup.string()
        .required('Age is required'),
});
