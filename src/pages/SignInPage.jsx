import { useForm } from "react-hook-form";
import AuthenticationPage from "./AuthenticationPage";
import Field from "~/components/field";
import Label from "~/components/label";
import Input from "~/components/input";
import Button from "~/components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import IconEyeClose from "~/icons/IconEyeClose";
import IconEyeOpen from "~/icons/IconEyeOpen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "~/firebase-app/config";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";

const SignInPage = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Please enter your password"),
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign In Page";
    if (userInfo?.email) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  const handlerSignIn = async (values) => {
    if (!isValid) {
      return;
    }

    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        delay: 100,
        pauseOnHover: false,
      });
    }
  }, [errors]);
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handlerSignIn)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            control={control}
          ></Input>
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
        <div className="have-account">
          You have not had an account?{" "}
          <NavLink to={"/sign-up"}>Register an account</NavLink>
        </div>
        <Button
          type="submit"
          style={{
            width: "100%",
            maxWidth: 350,
            margin: "0 auto",
          }}
          isLoading={isSubmitting}
          kind="primary"
        >
          Sign In
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
