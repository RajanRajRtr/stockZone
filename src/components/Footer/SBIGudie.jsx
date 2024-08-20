import React, { useEffect } from "react";
import "./style.css";
import { Col, Container, Row, Carousel, Card } from "react-bootstrap";
import { serviceData } from "../../utils/products";
import LOGO from ".././../Images/logo.png";

const SBIGudie = () => {

  useEffect(()=>{

    window.scrollTo(0,0)
  },[])
  return (
    <section >
      <Container >
        <Row className="wrapperz">
        <h1 className="pb-2">SEBI Gudielines</h1>
        <p >SECURITIES AND EXCHANGE BOARD OF INDIA (DELISTING OF SECURITIES) GUIDELINES - 2003</p>
        </Row>
        <Row>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRLS6kX9rTPtvOzf76CJAZ98PiBtbC48GCg&s" alt="logo"/>
        </Row>
        <Row>
       <h6>3.1 These guidelines shall be called "Securities and Exchange Board of India (Delisting of Securities) Guidelines 2003".
       These guidelines are being issued under section 11 (1) of SEBI Act, 1992, read with sub-section (2) of Section 11A of SEBI Act, with the objective to protect the interest of investors in the securities market.
       
     </h6>
     <h6 className="wrapperz py-4">DEFINITIONS</h6>
     <h6>these Guidelines, unless the context otherwise requires:-</h6>

     <ul className="wrapperz_ul">
      <li>
      (a) Act' means the Securities and Exchange Board of India Act, 1992
      </li><li>
      (b) Authority' means the Central Listing Authority established under the Securities and Exchange Board of India (Central Listing Authority) Regulations, 2003.
      </li>
      <li>
      (c) 'Board' means the Securities and Exchange Board of India established under section 3 of the Act.
      </li>
      <li>
      (d) 'compulsory delisting' means delisting of the securities of a company by an exchange.
        </li>
        <li>
        (e) 'delisting exchange' means the exchange from which the securities of the company are proposed to be delisted in accordance with these Guidelines.
        </li>
        <li>
        (f) 'exchange' means any stock exchange which has been granted recognition under section 4 of the Securities Contracts (Regulation) Act, 1956.
        </li>

        <li>
        (g) 'promoter' means a promoter as defined in clause (h) of sub-regulation (1) of Regulation 2 of the Securities and Exchange Board of India (Substantial Acquisition of Shares and
          Takeovers) Regulation, 1997 and includes a person who is desirous of getting the securities of the company delisted under these Guidelines.
        </li>

        <li>
        (h) 'public shareholding' means the shareholding in a company held by persons other than the promoter, the acquirer, or the persons acting in concert with him regulation 2(1) (j) of the Securities and Exchange Board of India (Substantial Acquisition of Shares and Takeovers) Regulation, 1997 and the term 'pub construed accordingly.
        </li>

        <li>
        (i) 'schedule' means a schedule appended to these Guidelines.
        </li>

        <li>
        (j) 'voluntary delisting' means delisting of securities of a body corporate voluntarily by a promoter or an acquirer or any other person other than the stock exchange (s).
        </li>
     </ul>
        </Row>
      </Container>
    </section>
  );
};

export default SBIGudie;
