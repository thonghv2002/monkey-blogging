import styled from "styled-components";
import Button from "~/components/button";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    &-content {
      max-width: 600px;
      color: white;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nesciunt eum minima, nemo ipsam fugiat magnam
              quidem nam numquam nulla praesentium repellat, eos expedita ipsum
              earum provident, in commodi quam?
            </p>
            <Button to="/sign-up">Get started</Button>
          </div>
          <div className="banner-image">
            <img src="/img-banner.png" alt="" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
