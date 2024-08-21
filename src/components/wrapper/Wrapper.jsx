import React from "react";
import "./style.css";
import { Col, Container, Row, Carousel, Card } from "react-bootstrap";
import { serviceData } from "../../utils/products";
import LOGO from ".././../Images/logo.png";
const Wrapper = () => {
  return (
    <section className="wrapper background">
      <Container>
        <Row>
          <Col md={8}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/p7HKvqRI_Bo?si=e_GCFZF7gz8vZH2B"
              // title="YouTube video player"
              // frameborder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>{" "}
          </Col>
          <Col md={4} className="Blogs_cards">
            <Card
              style={{
                boxShadow: "0 4px 8px 6px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            >
              <>
                <h3
                  style={{
                    backgroundColor: "#0f3460",
                    padding: "5px",
                    color: "white",
                    borderTopLeftRadius: "8px",
                  }}
                >
                  Blogs
                </h3>
                <Carousel style={{ paddingBottom: "8px" }}>
                  <Carousel.Item interval={1000}>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={LOGO} alt="logo" style={{ width: "50%" }} />
                    {/* <Carousel.Caption> */}
                    <h3>Jillian J. Dooley</h3>

                    <h6 class="mt-1">Ceo</h6>

                    <p class="mt-4">
                      Behind the word mountains, far from the countries Vokalia
                      and top consonantia, live blind the texts Separated. Freda
                      B. Walker
                    </p>
                    {/* </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img src={LOGO} alt="logo1" style={{ width: "50%" }} />
                    {/* <Carousel.Caption> */}
                    <h3>Elizabeth Sofia </h3>
                    <h6 class="mt-1">Developer</h6>
                    <p class="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.there live the blind the texts Separated
                    </p>
                    {/* </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={LOGO} alt="logo2" style={{ width: "50%" }} />
                    {/* <Carousel.Caption> */}
                    <h3>Willian A </h3>
                    <h6 class="mt-1">Tester</h6>
                    <p class="mt-4">
                      Behind the word mountains, far from the countries Vokalia
                      and top consonantia, there live the blind the texts
                      Separated.
                    </p>
                    {/* </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={LOGO} alt="logo2" style={{ width: "50%" }} />
                    {/* <Carousel.Caption> */}
                    <h3>Freda B. Walker</h3>
                    <h6 class="mt-1">Human Resource</h6>
                    <p class="mt-4">
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.there live the blind the texts Separated
                    </p>
                    {/* </Carousel.Caption> */}
                  </Carousel.Item>
                </Carousel>
              </>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Wrapper;
