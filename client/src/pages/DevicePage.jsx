import React from 'react';
import {Container, Col, Image, Row, Card, Button} from "react-bootstrap";
import bigStar from "../assets/Star-ratingBig.png"


const DevicePage = () => {

    const device = {id: 1, name: "Iphone 6s", price: 2500, rating: 5, img: "https://img.championat.com/c/1350x759/news/big/h/p/bloger-sokratil-naruto-na-115-chasov-radi-devushki_16494393021767498187.jpg"}
    const description = [
        {id: 4, title: 'Color', description: '5 GB'},
        {id: 5, title: 'Year', description: '2022'},
        {id: 1, title: 'Storage', description: '528 GB'},
        {id: 2, title: 'RAM', description: '12 GB'},
        {id: 3, title: 'Camera', description: '50 megapixels'},
        {id: 6, title: 'Battery', description: '4000 mAh'}
    ]

        return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300}  height={300} src={device.img}/>
                </Col>

                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{textAlign: "center"}}>{device.name}</h2>
                            <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width:300, height:300, fontSize: 32, border: "5px solid lightgray"}}
                    >
                        <h3>From {device.price}$</h3>
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>Add to basket</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3 align-items-center">
                <h1>Characteristics</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : "transparent", padding: 10, border: "2px solid gray"}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;