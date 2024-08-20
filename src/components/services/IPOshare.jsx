import React, { useState } from 'react'
import { Table } from 'antd';
import { Col, Container, Row, Carousel, Card,Button } from "react-bootstrap";
import { FaFilePdf } from 'react-icons/fa';
import Modal from "react-bootstrap/Modal";
function IPOshare() {
    const [showpdf, setShowpdf] = useState(false);
    const handleClosepdf = () => setShowpdf(false);
    const handleShowpdf = () => setShowpdf(true);
    const columns = [
        {
          title: 'Companies',
          dataIndex: 'name',
        },
        {
          title: 'Closes On',
          dataIndex: 'date',
         
        },
        {
          title: 'Price Range',
          dataIndex: 'math',
         
        },
        {
          title: 'Apply On',
          dataIndex: 'english',
          render: () => (
                    <>
                     <Button varient="success">Apply On</Button>
                    </>
                  ),
         
        },
        // {
        //     title: 'Gain or Loss',
        //     dataIndex: 'english',
        //     render: (text) => (
        //         <>
        //           {text > 0 ? (
        //             <>
        //               <ArrowUpOutlined style={{ color: 'green' }} /> {text}
        //             </>
        //           ) : (
        //             <>
        //               <ArrowDownOutlined style={{ color: 'red' }} /> {text}
        //             </>
        //           )}
        //         </>
        //       ),
          
        //   },
      ];
      const data = [
        {
          key: '1',
          name: 'BarinBess',
          date:  "AUG 6th, 8.30",
          math:  "₹60-77",
          english: -70,
        },
        {
          key: '2',
          name: 'UniCommerce Solutions',
          date:  "AUG 7th, 4.30",
          math:  "₹66-88",
          english: 889,
        },
        {
          key: '3',
          name: 'Picture Post Studio',
          date:  "AUG 7th, 4.30",
          math: " ₹90-120",
          english: -79,
        },
        {
          key: '4',
          name: 'OYO',
          date:  "AUG 7th, 4.30",
          math: " ₹99-150",
          english: -89,
        },
        {
            key: '6',
            name: 'Ola Electric',
            date:  "AUG 6th, 1.30",
            math: "₹222-299",
            english:  2222,
          },
          {
            key: '5',
            name: 'AMARAJA',
            date:  "AUG 6th, 2.30",
            math: "₹111-250",
            english: 1111,
          },
      ];
      const columns1 = [
        {
          title: 'Companies',
          dataIndex: 'name',
        },
        {
          title: 'Listing',
          dataIndex: 'date',
         
        },
        {
          title: 'Status',
          dataIndex: 'math',
         
        }
      
     
      ];
      const data1 = [
        {
          key: '1',
          name: 'segal India',
          date:  "AUG 6th, 8.30",
          math:  "₹60-77",
          english: -70,
        },
        {
          key: '2',
          name: 'TechSpark Solutions',
          date:  "AUG 7th, 4.30",
          math:  "₹66-88",
          english: 889,
        },
        {
          key: '3',
          name: 'Gmk Studio',
          date:  "AUG 7th, 4.30",
          math: " ₹90-120",
          english: -79,
        },
       
        
    
      ];
      const columns2 = [
        {
          title: 'Companies',
          dataIndex: 'name',
        },
        {
          title: 'Bid Starts',
          dataIndex: 'date',
         
        },
        {
          title: 'Price Range',
          dataIndex: 'math',
         
        },
        {
            title: '',
            dataIndex: 'english',
            render: () => (
                      <>
                       <FaFilePdf size={23} color="blue" style={{ cursor: "pointer" }} onClick={handleShowpdf} />
                      </>
                    ),
           
          },
      
     
      ];
      const data2 = [
        {
          key: '1',
          name: 'OYO',
          date:  "AUG 6th, 8.30",
          math:  "₹60-77",
          english: -70,
        },
        {
          key: '2',
          name: 'BOAT',
          date:  "AUG 7th, 4.30",
          math:  "₹66-88",
          english: 889,
        },
        {
          key: '3',
          name: 'MOBIKWIK',
          date:  "AUG 7th, 4.30",
          math: " ₹90-120",
          english: -79,
        },
        {
          key: '4',
          name: 'Bajaj energy',
          date:  "AUG 7th, 4.30",
          math: " ₹99-150",
          english: -89,
        }
         
      ];
     
  return (
    <section >
      <Container>< div style={{textAlign:"center"}}>
      <h1 className="pt-2" ><u>IPO - Initial Public Offerings</u></h1>
      <p className="py-2">"Explore the Historical IPO Performance of StockZone Shares to Inform Your Investment Strategy Today."</p>
      </div>
        <Row>
        <h5 className="py-2" style={{color:"green"}}>Open IPO</h5>
        <div className="table-box-shadow">
        <Table columns={columns} dataSource={data}  />
        </div>
        </Row>

        <Row className='mt-5'>
        <h5 className="py-2" style={{color:"red"}}>Closed IPO</h5>
        <div className="table-box-shadow">
        <Table columns={columns1} dataSource={data1}  />
        </div>
        </Row>

        <Row>
        <h5 className="py-2" style={{color:"orange"}}>Upcoming IPO</h5>
        <div className="table-box-shadow">
        <Table columns={columns2} dataSource={data2}  />
        </div>
        </Row>

        {/* <Row className='mt-5'>
        <h3 className="pt-2" style={{color:"blue"}}>Listed IPO</h3>
        <div className="table-box-shadow">
        <Table columns={columns1} dataSource={data1}  />
        </div>
        </Row> */}
      </Container>
      <Modal style={{ width: "100%",height:"100vh" }} show={showpdf} onHide={handleClosepdf} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-center">Pdf</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe src="https://arxiv.org/pdf/quant-ph/0410100.pdf" width="755" height="315"></iframe>
        </Modal.Body>
    </Modal>
    </section>
  )
}

export default IPOshare