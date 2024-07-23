import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { registerSchema } from "../Validations/Validations";
import classes from "./Register.module.css";
import user from "../../Assets/Images/user.svg";
import at from "../../Assets/Images/at.svg";
import eyeClosed from "../../Assets/Images/eyeCLosed.svg";
import eyeOpen from "../../Assets/Images/eyeOpen.svg";
import { useUser } from "../UserContext/UserContext";

const validatePassword = (password) => {
  const passwordValidations = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    specialChar: /[^a-zA-Z0-9]/.test(password),
    length: password.length >= 8 && password.length <= 15,
  };
  return passwordValidations;
};

export const Register = () => {
  const postRegister = "https://cooks-corner-prod.up.railway.app/api/register";
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!showPassword);
  const handleConfirmPasswordShow = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    try {
      console.log("Submitting payload:", payload);
      const response = await axios.post(postRegister, payload);
      console.log("Response data:", response.data);
      setSubmitting(false);
      const user = { name: values.name, email: values.email };
      setUser(user, response.data.token);
      navigate("/main");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else {
        console.error("Error message:", error.message);
      }
      setSubmitting(false);
    }
  };

  return (
    <div className={classes.register__section}>
      <div className={classes.header}>
        <h1>
          Sign up for delicious <b>Discoveries!</b>
        </h1>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <div className={classes.register__form}>
            <Form>
              <div className={classes.input__wrapper}>
                <p>Name</p>
                <Field type="text" name="name" placeholder="Enter your name" />
                <img src={user} alt="user" />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className={classes.error}
              />

              <div className={classes.input__wrapper}>
                <p>Email</p>
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                />
                <img src={at} alt="at" />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className={classes.error}
              />

              <div className={classes.input__wrapper}>
                <p>Password</p>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your Password"
                />
                <img
                  src={showPassword ? eyeOpen : eyeClosed}
                  alt={showPassword ? "eyeOpen" : "eyeClosed"}
                  onClick={handlePasswordShow}
                />
              </div>
              <ul className={classes.validation__ul}>
                <li
                  className={
                    validatePassword(values.password).uppercase
                      ? classes.validation__li_valid
                      : classes.validation__li_invalid
                  }
                >
                  At least one uppercase letter
                </li>
                <li
                  className={
                    validatePassword(values.password).lowercase
                      ? classes.validation__li_valid
                      : classes.validation__li_invalid
                  }
                >
                  At least one lowercase letter
                </li>
                <li
                  className={
                    validatePassword(values.password).number
                      ? classes.validation__li_valid
                      : classes.validation__li_invalid
                  }
                >
                  At least one number
                </li>
                <li
                  className={
                    validatePassword(values.password).specialChar
                      ? classes.validation__li_valid
                      : classes.validation__li_invalid
                  }
                >
                  At least one special character
                </li>
                <li
                  className={
                    validatePassword(values.password).length
                      ? classes.validation__li_valid
                      : classes.validation__li_invalid
                  }
                >
                  8-15 characters long
                </li>
              </ul>

              <div className={classes.input__wrapper}>
                <p>Confirm Password</p>
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Re-Enter your Password"
                />
                <img
                  src={showConfirmPassword ? eyeOpen : eyeClosed}
                  alt={showConfirmPassword ? "eyeOpen" : "eyeClosed"}
                  onClick={handleConfirmPasswordShow}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={classes.error}
              />

              <button
                type="submit"
                className={classes.submit__btn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
              <Link to="/">
                <h3 className={classes.right__h3}>
                  Already have an account? <span>Sign in now</span>
                </h3>
              </Link>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
