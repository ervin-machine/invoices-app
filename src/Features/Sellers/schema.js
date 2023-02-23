import * as Yup from "yup";
export const SellerSchema = Yup.object().shape({
    companyName: Yup.string()
        .required('Company name is required'),
    hqAddress: Yup.string()
        .required('Address is required'),
    isActive: Yup.boolean()
});
