import React from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';
import Stores from './Stores';

const StoreCard = ({ store }) => (
    <div className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '35rem', minHeight: '12vh', borderRadius: '10px', }} className="mb shadow" >
            <Row className="g-0">
                <Col xs={4} className="d-flex justify-content-center align-items-center" style={{ minHeight: '12vh' }}>
                    <Image src={store.image} style={{ width: '60%', border: '1px solid black' }} roundedCircle />
                </Col>
                <Col xs={8}>
                    <Card.Body>
                        <Card.Title style={{ fontSize: '1rem' }}>{store.name}</Card.Title>
                        <Card.Text style={{ fontSize: '0.85rem' }}>
                            <div>{store.deliveryTime}</div>
                            {store.tags.map((tag, index) => (
                                <span key={index} className="badge bg-secondary me-1">{tag}</span>
                            ))}
                        </Card.Text>

                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </div>
);

const StoreGrid = ({ stores }) => (
    <Row xs={1} md={2} lg={3} className="justify-content-center g-2 p-4">
        {stores.map((store, idx) => (
            <Col key={idx}>
                <StoreCard store={store} />
            </Col>
        ))}
    </Row>
);

// Example usage:
// const stores = [
//     {
//         name: 'Walmart',
//         image: 'walmart-logo-url',
//         deliveryTime: 'Delivery by 5:05pm',
//         tags: ['In-store prices']
//     },
//     // ... other stores
// ];

function StoreCards() {
    return (
        <div className='py-4'>
            <h2 className='text-center'>Choose your store Near you</h2>
            <StoreGrid stores={Stores} />
            <Button variant='link'>View All Stores</Button>
        </div>
    );
}

export default StoreCards;
