import { signOut } from "firebase/auth";
import styled from "styled-components";
import Header from "~/components/layout/Header";
import { auth } from "~/firebase-app/config";

const HomePageStyles = styled.div``;

const HomePage = () => {
  // const handleSignOut = () => {
  //   signOut(auth);
  // };
  return (
    <HomePageStyles>
      <Header></Header>
    </HomePageStyles>
  );
};

export default HomePage;
