import React from "react";
import "./Wapper1.css";
import { Col, Container, Row, Carousel, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
const spanstyle ={
    backgroundColor: "#1154a3",
    color:"white",
    padding:"5px",
    borderRadius:"20px"
}

const arrow_style={
  position: "relative",
    top: "117px"
}
const Wrapper1 = () => {

  return (
    <section className="p_wrapperProcess py-3 pb-5 ">
      <Container>
        <Row>
         <h1 className="pb-1">Process To Buy StockZone Shares</h1>
        <p className="py-2">Recommended For Those Intrested In Dealing With StockZone Shares. </p>
        
        </Row>
        <Row className="my-4">
       <Col md={3} sm={12}>
       <h4 className="pb-3"><span style={spanstyle}> 1</span> &nbsp;Contact Us</h4>
       <p style={{fontSize:"18px"}}>Connect With Your RMs and Get Best <br/>StockZone Share Prices. </p>
       </Col>
       <Col md={1} sm={12}>
       <FaArrowRight size={38} color="#1154a3" />
       </Col>
       <Col md={3} sm={12}>
       <h4 className="pb-3"> <span style={spanstyle}>2</span> &nbsp;Dealing Processing</h4>
       <p style={{fontSize:"18px"}}>First, The Buyer Send Payment To <br/>Our Bank Then StockZone Team<br/> Start Processing. </p>
       </Col>
       <Col md={1} sm={12}>
       <FaArrowRight size={38} color="#1154a3" />
       </Col>
       <Col md={4} sm={12}>
       
       <h4 className="pb-3"> <span style={spanstyle}>3</span> &nbsp;Dealing Completion</h4>
       <p style={{fontSize:"18px"}}> After Getting Payment Our Team <br/>Tranfer Shares With in 24HRS.</p>
       </Col>
        </Row>
        {/* <h1 className="pt-5">Process To Buy StockZone Shares</h1>
        <p className="py-2">Recommended For Those Intrested In Dealing With StockZone Shares. </p> */}

        {/* <Row >
        
        <ol>
        <Col md={3}>
    <li >
        <div class="icon"><i class="fa-solid fa-bicycle"></i></div>
        <div class="title">Contact Us</div>
        <div class="descr">Connect With Your RMs and Get Best <br/>StockZone Share Prices.</div>
    </li>
    </Col>
    
       <FaArrowRight style={arrow_style} size={38} color="#1154a3" />

       <Col md={3}>
    <li >
        <div class="icon"><i class="fa-solid fa-car"></i></div>
        <div class="title">Dealing Processing</div>
        <div class="descr">First, The Buyer Send Payment To <br/>Our Bank Then StockZone Team<br/> Start Processing.</div>
    </li>
    </Col>

       <FaArrowRight style={arrow_style} size={38} color="#1154a3" />
     

       <Col md={3}>
    <li >
        <div class="icon"><i class="fa-solid fa-helicopter"></i></div>
        <div class="title">Dealing Completion</div>
        <div class="descr"> After Getting Payment Our Team <br/>Tranfer Shares With in 24HRS.</div>
    </li>
    </Col>
    
</ol>
        </Row> */}
      </Container>
    </section>
  );
};

export default Wrapper1;
