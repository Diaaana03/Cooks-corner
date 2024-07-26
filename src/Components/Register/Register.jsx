import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./Register.module.css";
import { registerSchema } from "../Validations/Validations";
import { useUser } from "../UserContext/UserContext";
import eyeOpen from "../../Assets/Images/eyeOpen.svg";
import eyeClosed from "../../Assets/Images/eyeCLosed.svg";
import at from "../../Assets/Images/at.svg";
import userIcon from "../../Assets/Images/user.svg";

export const Register = () => {
  const postRegister = "https://cooks-corner-prod.up.railway.app/api/register";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordShow = () => setShowPassword(!showPassword);
  const { setUser } = useUser();

  const handleRegister = async (data) => {
    try {
      const response = await axios.post(postRegister, data);
      if (response.status === 200) {
        const user = { name: response.data.name, email: response.data.email };
        setUser(user, response.data.token);
        navigate("/main");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.register__section}>
      <div className={classes.header}>
        <h1>Join CooksCorner</h1>
        <p>Start your cooking journey with us</p>
      </div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleRegister({
            name: values.name,
            email: values.email,
            password: values.password,
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.form}>
            <div className={classes.input__wrapper}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={classes.input}
              />
              <img src={userIcon} alt="User" />
              <ErrorMessage
                name="name"
                component="div"
                className={classes.error}
              />
            </div>
            <div className={classes.input__wrapper}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={classes.input}
              />
              <img src={at} alt="Email" />
              <ErrorMessage
                name="email"
                component="div"
                className={classes.error}
              />
            </div>
            <div className={classes.input__wrapper}>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={classes.input}
              />
              <img
                src={showPassword ? eyeOpen : eyeClosed}
                alt="Toggle Password Visibility"
                onClick={handlePasswordShow}
                style={{ cursor: "pointer" }}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={classes.error}
              />
            </div>
            <button
              type="submit"
              className={classes.submit__btn}
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/">
        <p className={classes.bottom__link}>Already have an account? Log in</p>
      </Link>
    </div>
  );
};
