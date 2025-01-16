import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "~/components/button";
import Field from "~/components/field";
import Input from "~/components/input";
import Label from "~/components/label";
import IconEyeClose from "~/icons/IconEyeClose";
import IconEyeOpen from "~/icons/IconEyeOpen";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "~/firebase-app/config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const SignUpPageStyles = styled.div`
  min-height: 100vh;

  .logo {
    margin: 0 auto 20px;
  }

  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const schema = yup.object().shape({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handlerSignup = async (values) => {
    if (!isValid) return;
    console.log("🚀 ~ handlerSignup ~ values:", values);
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });

    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });

    toast.success("Register successfully!!");
    navigate("/");
  };

  const [togglePassword, setTogglePassword] = useState(false);
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        delay: 100,
        pauseOnHover: false,
      });
    }
  }, [errors]);
  return (
    <SignUpPageStyles>
      <div className="container">
        <img
          srcSet="/public/logo.png 2x"
          alt="monkey-blogging"
          className="logo"
        />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handlerSignup)}>
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              control={control}
            />
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              type={togglePassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              control={control}
            >
              {!togglePassword ? (
                <IconEyeClose
                  onClick={() => setTogglePassword(true)}
                ></IconEyeClose>
              ) : (
                <IconEyeOpen
                  onClick={() => setTogglePassword(false)}
                ></IconEyeOpen>
              )}
            </Input>
          </Field>
          <Button
            type="submit"
            style={{
              maxWidth: 350,
              margin: "0 auto",
            }}
            isLoading={isSubmitting}
          >
            Sign Up
            {/* <LoadingSpinner></LoadingSpinner> */}
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
