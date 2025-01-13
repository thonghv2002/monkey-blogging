import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "~/components/input";
import Label from "~/components/label";

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

  .field {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  .label {
    color: ${(props) => props.theme.grayDark};
    font-weight: 500;
    cursor: pointer;
  }

  .input {
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }
  .input::-webkit-input-placeholder {
    color: #84878b;
  }
  .input::-moz-input-place-holder {
    color: #84878b;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const { control } = useForm({});
  return (
    <SignUpPageStyles>
      <div className="container">
        <img
          srcSet="/public/logo.png 2x"
          alt="monkey-blogging"
          className="logo"
        />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form">
          <div className="field">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              id="fullname"
              className="input"
              placeholder="Enter your fullname"
              control={control}
              hasIcon
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
