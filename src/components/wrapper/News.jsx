import React from "react";
import "./News.css";
import { Col, Container, Row, Carousel, Card, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
const spanstyle = {
  backgroundColor: "#1154a3",
  color: "white",
  padding: "5px",
  borderRadius: "20px",
};
const News = () => {
  return (
    <section className="wrapper background">
      <Container>
        <Row>
          <h1 className="pb-3">StockZone Share In News</h1>
        </Row>

        <Row>
          <section class="articles">
            <Col md={4} sm={12}>
              <article>
                <div class="article-wrapper">
                  <figure>
                    <img
                      src="https://images.hindustantimes.com/img/2024/07/10/550x309/FIRSTCRY-INDIA-IPO-0_1716452785301_1720588131396.JPG"
                      alt=""
                    />
                  </figure>
                  <div class="article-body">
                    <h5>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h5>
                    <p>
                      Curabitur convallis ac quam vitae laoreet. Nulla mauris
                      ante, euismod sed lacus sit amet, congue bibendum eros.
                      Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                      enim imperdiet egestas.
                    </p>
                    {/* <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a> */}
                  </div>
                </div>
              </article>
            </Col>
            <Col md={4} sm={12}>
              <article>
                <div class="article-wrapper">
                  <figure>
                    <img
                      src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202402/65c4b3f62cbb6-bat-said-its-stake-in-itc-decreased-from-2919-per-cent-in-2022-to-2902-per-cent-in-2023-08590112-16x9.jpg"
                      alt=""
                    />
                  </figure>
                  <div class="article-body">
                    <h5>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h5>
                    <p>
                      Curabitur convallis ac quam vitae laoreet. Nulla mauris
                      ante, euismod sed lacus sit amet, congue bibendum eros.
                      Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                      enim imperdiet egestas.
                    </p>
                    {/* <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a> */}
                  </div>
                </div>
              </article>
            </Col>
            <Col md={4} sm={12}>
              <article>
                <div class="article-wrapper">
                  <figure>
                    <img
                      src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/12/30/219027-eds-82.jpg?itok=DYr9O3fo"
                      alt=""
                    />
                  </figure>
                  <div class="article-body">
                    <h5>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting{" "}
                    </h5>
                    <p>
                      Curabitur convallis ac quam vitae laoreet. Nulla mauris
                      ante, euismod sed lacus sit amet, congue bibendum eros.
                      Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                      enim imperdiet egestas.
                    </p>
                    {/* <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a> */}
                  </div>
                </div>
              </article>
            </Col>
          </section>
          {/* <Row > */}

          {/* View more <span class="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a> */}
          {/* </Row> */}
        </Row>
      </Container>
      <Button varient="info">View more</Button>
    </section>
  );
};

export default News;
