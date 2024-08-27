import React from "react";
import "./slidercard.css";
import { Col, Container, Row, Carousel, Card, Button } from "react-bootstrap";
import { Table } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { HiOutlineDocumentReport } from "react-icons/hi";
const Performance = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      responsive: ["md", "sm", "lg", "xs"],
    },
    {
      title: "StockZone Share Price",
      dataIndex: "chinese",
      responsive: ["md", "lg"],
    },
    {
      title: "IPO Share Price",
      dataIndex: "math",
      responsive: ["md", "sm", "lg"],
    },
    {
      title: "CMP Price",
      dataIndex: "english",
      responsive: ["md", "lg"],
    },
    {
      title: "Gain or Loss",
      dataIndex: "english",
      responsive: ["md", "sm", "lg"],
      render: (text) => (
        <>
          {text > 0 ? (
            <>
              <ArrowUpOutlined style={{ color: "green" }} /> {text}
            </>
          ) : (
            <>
              <ArrowDownOutlined style={{ color: "red" }} /> {text}
            </>
          )}
        </>
      ),
    },
    {
      title: "Reports",
      dataIndex: "",
      responsive: ["md", "sm", "lg"],
      render: (text) => (
        <>
          {/* <Button variant="info"> */}
          <HiOutlineDocumentReport size={20} style={{ cursor: "pointer" }} />
          {/* </Button> */}
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "HCL",
      chinese: "₹48 - 56",
      math: "₹60",
      english: -70,
    },
    {
      key: "2",
      name: "TATA STEEL",
      chinese: "₹998-1234",
      math: "₹66",
      english: 889,
    },
    {
      key: "3",
      name: "ZOMATO",
      chinese: " ₹98-101",
      math: " ₹90",
      english: -79,
    },
    {
      key: "4",
      name: "OYO",
      chinese: " ₹88-87",
      math: " ₹99",
      english: -89,
    },
    {
      key: "4",
      name: "HDFC",
      chinese: "₹22-40",
      math: "₹222",
      english: 2222,
    },
    {
      key: "4",
      name: "AMARAJA",
      chinese: "₹11-111",
      math: "₹111",
      english: 1111,
    },
  ];

  //   const onChange = (pagination, filters, sorter, extra) => {
  //     console.log('params', pagination, filters, sorter, extra);
  //   };
  return (
    <section style={{ textAlign: "center" }}>
      <Container>
        <Row>
          <h1 className="pt-2">Past IPO Performance</h1>
          <p className="py-2">
            "Explore the Historical IPO Performance of StockZone Shares to
            Inform Your Investment Strategy Today."
          </p>
          <div className="table-box-shadow">
            <Table columns={columns} dataSource={data} />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Performance;
