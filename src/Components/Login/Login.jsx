import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { loginSchema } from "../Validations/Validations";
import classes from "./Login.module.css";
import at from "../../Assets/Images/at.svg";
import eyeClosed from "../../Assets/Images/eyeClosed.svg";

export const Login = () => {
  const postLogin = "https://cooks-corner-prod.up.railway.app/api/login";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordShow = () => setShowPassword(!showPassword);

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(postLogin, data);
      if (response.status === 200) {
        navigate("/main");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      handleLogin({ username: values.login, password: values.password });
      actions.setSubmitting(false);
    },
  });

  return (
    <div className={classes.login__section}>
      <div className={classes.header}>
        <h1>
          Welcome Back To <b>CooksCorner</b>
        </h1>
      </div>
      <div className={classes.login__form}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.input__wrapper}>
            <p>Email</p>
            <input
              type="text"
              placeholder="Email"
              id="login"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.login}
            />
            <img src={at} alt="at" />
          </div>
          <div className={classes.input__wrapper}>
            <p>Password</p>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <img
              src={eyeClosed}
              alt="eyeClosed"
              onClick={handlePasswordShow}
              style={{ cursor: "pointer" }}
            />
          </div>
          <button type="submit" className={classes.submit__btn}>
            Sign in
          </button>
          <Link to="/register">
            <h3 className={classes.right__h3}>
              I don't have an account? <span>Sign up now</span>
            </h3>
          </Link>
        </form>
      </div>
    </div>
  );
};
