import * as yup from "yup";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,24}$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

export const registerSchema = yup.object().shape({
  email: yup.string().email("Email is incorrect").required("Email required"),

  name: yup.string().required("Name required"),

  password: yup
    .string()
    .min(8, "8 - 15 characters")
    .max(15, "8 - 15 characters")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/[A-Z]/, "At least one capital letter")
    .matches(/\d/, "At least one number")
    .matches(/[^a-zA-Z0-9]/, 'At least one special character (!, ", #, $...)')
    .required("Password required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Repeat password")
    .required("Repeat password"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email is incorrect").required("Email required"),

  password: yup
    .string()
    .min(5, "8 - 15 characters")
    .max(15, "8 - 15 characters")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/[A-Z]/, "At least one capital letter")
    .matches(/\d/, "At least one number")
    .matches(/[^a-zA-Z0-9]/, 'At least one special character (!, ", #, $...)')
    .required("Password required"),
});
