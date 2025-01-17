import styled from "styled-components";
import Layout from "~/components/layout/Layout";
import HomeBanner from "~/module/home/HomeBanner";

const HomePageStyles = styled.div``;

const HomePage = () => {
  // const handleSignOut = () => {
  //   signOut(auth);
  // };
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
