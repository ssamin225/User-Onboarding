import * as yup from 'yup';

const formSchema = yup.object().shape({
    fname: yup
        .string()
        .trim()
        .required('First Name is required'),
    lname: yup
        .string()
        .trim()
        .required('Last Name is required'),
    email: yup
        .string()
        .email()
        .trim()
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .min(8, 'Password must be at least 8 characters'),
    agree: yup.boolean()
})

export default formSchema;