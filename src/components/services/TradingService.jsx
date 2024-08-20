import React, { useState } from "react";
import { Col, Container, Row, Carousel, Card, Button } from "react-bootstrap";
import { Tabs } from 'antd';
const TradingService = () => {

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: 'Intra-Hour Kicks',
            children:  (
                <div>
                    <h3>Intra-Hour Kicks</h3>
                    <p>
                        This service can be availed only after completion of your KYC. 
                        Enthusiasts with the risk appetite of minimum 30% on their capital 
                        and expecting moderate returns with short hold time are more suitable 
                        for intraday Booster package.
                    </p>
                    <Button variant="primary">Contact Us</Button>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Intraday Booster',
            children: (
                <div>
                    <h3>Intraday Booster</h3>
                    <p>
                        Intraday Booster service offers quick trades with a focus on maximizing 
                        short-term profits. Ideal for those who can monitor the market actively.
                    </p>
                    <Button variant="primary">Contact Us</Button>
                </div>
            ),
        },
        {
            key: '3',
            label: 'BTST Bold',
            children: (
                <div>
                    <h3>BTST Bold</h3>
                    <p>
                        BTST Bold provides insights for buying today and selling tomorrow,<br/> suitable 
                        for traders looking for overnight opportunities.
                    </p>
                    <Button variant="primary">Contact Us</Button>
                </div>
            ),
        },
        {
            key: '4',
            label: 'Positional Priority',
            children: (
                <div>
                    <h3>Positional Priority</h3>
                    <p>
                        Positional Priority is tailored for those looking for a longer-term approach, 
                        focusing on trends and major market movements.<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse est totam soluta veniam repellat voluptatum voluptate tempore molestiae ex!
                    </p>
                    <Button variant="primary">Contact Us</Button>
                </div>
            ),
        },
    ];
    return (
        <section className="wrapper background" style={{

            backgroundColor: "white"
        }}>
            <Container>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered />;
            </Container>

        </section>
    );
};

export default TradingService;
